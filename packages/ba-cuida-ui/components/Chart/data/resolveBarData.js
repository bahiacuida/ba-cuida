import { resolveDataSrc } from './resolveDataSrc'
import { applyFilter, applyAggregate, applyTransposeBy } from './util'

export async function resolveBarData({
  src,
  valueKey,
  filter,
  aggregate,
  transpose,
}) {
  let data = await resolveDataSrc({ src, numericKeys: [valueKey] })

  data = !filter ? data : applyFilter(data, filter)

  data = !aggregate
    ? data
    : applyAggregate(data, { ...aggregate, sumKeys: [valueKey] })

  data = !transpose
    ? data
    : applyTransposeBy(data, {
        valueKey,
        ...transpose,
      })

  return data
}
