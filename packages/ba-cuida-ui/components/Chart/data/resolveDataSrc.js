import { dsvFormat } from 'd3-dsv'

function _parseNumber(input) {
  try {
    if (input == null) return null

    if (typeof input === 'number') return input

    if (typeof input === 'string') {
      const cleaned = input
        .trim()
        .replace(/\./g, '') // remove thousand separators
        .replace(/,/g, '.') // convert decimal separator
        .replace(/[^0-9.]/g, '') // remove anything not digit or dot

      if (cleaned === '' || isNaN(cleaned)) return null

      return parseFloat(cleaned)
    }

    return null
  } catch (err) {
    console.error(err)
    return null
  }
}

function _parseCsv({ src, numericKeys = [] }) {
  return dsvFormat(',').parse(src, (entry) => ({
    ...entry,
    ...Object.fromEntries(
      numericKeys.map((numKey) => [numKey, _parseNumber(entry[numKey])]),
    ),
  }))
}

export async function resolveDataSrc({ src, numericKeys }) {
  if (Array.isArray(src)) {
    return src
  }

  if (typeof src === 'string' && src.startsWith('https://')) {
    const data = await fetch(src)
      .then((res) => res.text())
      .then((csv) =>
        _parseCsv({
          src: csv,
          numericKeys,
        }),
      )

    return data
  }

  if (typeof src === 'string') {
    return _parseCsv({ src, numericKeys })
  }
}
