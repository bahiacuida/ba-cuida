import { DataPageHighlight } from './DataPageHighlight'
import { DataPageMain } from './DataPageMain'

export function DataPage({ fetchIndicators }) {
  return (
    <>
      <DataPageHighlight />
      <DataPageMain fetchIndicators={fetchIndicators} />
    </>
  )
}
