import { resolveDataSrc } from './resolveDataSrc'
import { applyFilter, applyAggregate } from './util'

export async function resolvePieData({
  src,
  labelKey = 'label',
  valueKey = 'value',
  filter,
  aggregate,
}) {
  let data = await resolveDataSrc({ src, numericKeys: [valueKey] })

  data = !filter ? data : applyFilter(data, filter)

  data = !aggregate
    ? data
    : applyAggregate(data, { ...aggregate, sumKeys: [valueKey] })

  return Object.fromEntries(
    data.map((entry) => [entry[labelKey], entry[valueKey]]),
  )
}
