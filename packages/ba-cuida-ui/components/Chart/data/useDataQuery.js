import { useQuery } from '@tanstack/react-query'
import { resolveBarData } from './resolveBarData'
import { resolvePieData } from './resolvePieData'

const RESOLVERS = {
  bar: resolveBarData,
  pie: resolvePieData,
}

export function useDataQuery({ type, options }) {
  const resolver = RESOLVERS[type]

  if (!resolver) {
    throw new TypeError(`Unsupported resolver ${type}`)
  }

  return useQuery({
    queryKey: [type, options],
    queryFn: () => resolver(options),
    retry: process.env.NODE_ENV === 'production',
    throwOnError: process.env.NODE_ENV !== 'production',
  })
}
