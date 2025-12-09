import { resolveDataSrc } from './resolveDataSrc'
import { applyFilter, applyGroupBy, applyTransposeBy } from './util'

export async function resolveBarData({
  src,
  valueKey,
  labelKey,
  filter,
  groupBy,
  transpose,
}) {
  console.log({
    src,
    valueKey,
    filter,
  })

  let data = await resolveDataSrc({ src, numericKeys: [valueKey] })

  data = !filter ? data : applyFilter(data, filter)

  data = !groupBy
    ? data
    : applyGroupBy(data, { ...groupBy, sumKeys: [valueKey] })

  data = !transpose
    ? data
    : applyTransposeBy(data, {
        ...transpose,
        valueKey,
        labelKey,
      })

  return data

  // return Object.fromEntries(
  //   data.map((entry) => [entry[labelKey], entry[valueKey]]),
  // )

  // return data
}
