import { resolveDataSrc } from './resolveDataSrc'
import { applyFilter, applyGroupBy } from './util'

export async function resolvePieData({
  src,
  labelKey = 'label',
  valueKey = 'value',
  filter,
  groupBy,
}) {
  let data = await resolveDataSrc({ src, numericKeys: [valueKey] })

  data = !filter ? data : applyFilter(data, filter)

  data = !groupBy
    ? data
    : applyGroupBy(data, { ...groupBy, sumKeys: [valueKey] })

  return Object.fromEntries(
    data.map((entry) => [entry[labelKey], entry[valueKey]]),
  )
}
