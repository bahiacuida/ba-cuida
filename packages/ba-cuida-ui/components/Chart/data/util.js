import { groupBy, pick } from 'lodash-es'

export function applyFilter(data, filter) {
  return data.filter((entry) =>
    Object.entries(filter).every(([key, targetValues]) => {
      targetValues = Array.isArray(targetValues) ? targetValues : [targetValues]

      const value = entry[key]

      return targetValues.includes(value)
    }),
  )
}

export function applyGroupBy(data, { keys: groupByKeys, sumKeys = [] }) {
  const groups = groupBy(data, (entry) =>
    groupByKeys.map((key) => entry[key] + '').join('_'),
  )

  return Object.values(groups).map((group) => {
    const [first, ...others] = group

    return others.reduce(
      (acc, entry) => ({
        ...acc,
        ...Object.fromEntries(
          sumKeys.map((sumKey) => [
            sumKey,
            (acc[sumKey] || 0) + (entry[sumKey] || 0),
          ]),
        ),
      }),
      // first,
      pick(first, [...groupByKeys, ...sumKeys]),
    )
  })
}

export function applyTransposeBy(data, { groupByKeys, labelKey, valueKey }) {
  const groups = groupBy(data, (entry) =>
    groupByKeys.map((key) => entry[key] + '').join('_'),
  )

  return Object.values(groups).map((group) => ({
    ...pick(group[0], groupByKeys),
    ...Object.fromEntries(
      group.map((entry) => [entry[labelKey], entry[valueKey]]),
    ),
  }))
}
