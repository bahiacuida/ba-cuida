import { PieChart } from './PieChart'
import { BarChart } from './BarChart'
import { useDataQuery } from './data'

const CHART_COMPONENTS = {
  pie: PieChart,
  bar: BarChart,
}

export function Chart({ type, data, ...props }) {
  const Component = CHART_COMPONENTS[type]

  if (!Component) {
    throw new TypeError(`Could not find chart of type ${type}`)
  }

  const dataQuery = useDataQuery({
    type,
    options: data,
  })

  console.log(dataQuery.data)

  return dataQuery.status === 'success' ? (
    <Component data={dataQuery.data} {...props} />
  ) : null
}
