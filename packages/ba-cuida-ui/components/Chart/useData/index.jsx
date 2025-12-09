import { useQuery } from '@tanstack/react-query'
import { dsvFormat } from 'd3-dsv'

async function _resolveData({ dataSrc, valueKeys, transposeKey }) {
  if (Array.isArray(data)) {
    return data
  }

  if (typeof data === 'string' && data.startsWith('https://')) {
  }

  if (typeof data === 'string') {
    return dsvFormat(',').parse(data)
  }
}

async function resolveDataQuery({ dataSrc, filter, groupBy, valueKeys }) {
  const resolvedData = typeof dataSrc
}

export function useDataQuery({ dataSrc, filter, groupBy, valueKeys }) {
  return useQuery({
    queryKey: [dataSrc, filter, groupBy, valueKeys],
    queryFn: () => {},
  })
}
