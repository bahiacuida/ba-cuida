import { PieChart } from './PieChart'
import { BarChart } from './BarChart'
import { useDataQuery } from './data'
import {
  Box,
  Button,
  Flex,
  Input,
  LoadingOverlay,
  Markdown,
  ShadowExpandable,
} from '@orioro/react-ui-core'
import { Heading } from '@radix-ui/themes'
import { useQuery } from '@tanstack/react-query'
import { resolveDataSrc } from './data/resolveDataSrc'
import { useRef, useState } from 'react'
import { pick, uniq } from 'lodash-es'
import { Icon } from '@mdi/react'
import { mdiDownload } from '@mdi/js'
import { useInView } from '@/components/useInView'

const CHART_RENDERERS = {
  pie: PieChart,
  bar: BarChart,
}

function _fmtLabel(str) {
  if (!str) return ''
  const withSpaces = str.replace(/_/g, ' ')
  return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1)
}

export function Chart({
  title,
  description,
  source,
  type,
  userFilterSpec = [],
  data,
  ...props
}) {
  const containerRef = useRef(null)
  const ChartRenderer = CHART_RENDERERS[type]

  if (!ChartRenderer) {
    throw new TypeError(`Could not find chart of type ${type}`)
  }

  const dataSrcQuery = useQuery({
    queryKey: [data.src],
    queryFn: () =>
      resolveDataSrc({ src: data.src, numericKeys: [data.valueKey] }),
    placeholderData: (previousData) => previousData,
  })

  const [userFilterValue, setUserFilterValue] = useState(
    pick(data.filter || {}, userFilterSpec),
  )

  const dataQuery = useDataQuery({
    type,
    options: {
      ...data,
      src: dataSrcQuery.data,
      filter: {
        ...(data.filter || {}),
        ...userFilterValue,
      },
    },
    enabled: Array.isArray(dataSrcQuery.data),
    placeholderData: (previousData) => previousData,
  })

  // const inView = useInView(containerRef, {
  //   root: null, // viewport
  //   rootMargin: '-300px 0px 0px 0px',
  //   threshold: 0,
  // })

  // console.log('inView', inView)

  return (
    <Flex
      ref={containerRef}
      direction="column"
      gap="4"
      style={{
        scrollMarginTop: '60px',
      }}
      onFocus={() => {
        const el = containerRef.current
        if (!el) return

        const rect = el.getBoundingClientRect()
        const viewportHeight = window.innerHeight

        const isAtLeast75vhAboveBottom = rect.top <= viewportHeight * (1 - 0.75)

        if (!isAtLeast75vhAboveBottom) {
          el.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      }}
    >
      <Heading
        as="h3"
        size="4"
        style={{
          color: 'var(--orange-11)',
        }}
      >
        <strong>{title}</strong>
      </Heading>

      {userFilterSpec.length > 0 && dataSrcQuery.data && (
        <Flex direction="row" gap="3">
          {userFilterSpec.map((filterKey) => (
            <Input
              key={filterKey}
              value={userFilterValue[filterKey]}
              onSetValue={(nextValue) =>
                setUserFilterValue((curr) => ({
                  ...curr,
                  [filterKey]: nextValue || data.filter?.[filterKey],
                }))
              }
              schema={{
                type: 'select',
                clearable: false,
                label: _fmtLabel(filterKey),
                options: uniq(
                  dataSrcQuery.data.map((entry) => entry[filterKey]),
                )
                  .sort()
                  .map((value) => ({
                    label: _fmtLabel(value),
                    value,
                  })),
              }}
            />
          ))}
        </Flex>
      )}

      <Box
        style={{
          minHeight: '300px',
          position: 'relative',
        }}
      >
        {dataQuery.status === 'pending' && <LoadingOverlay />}
        {dataQuery.data && <ChartRenderer data={dataQuery.data} {...props} />}
      </Box>

      <Flex direction="row" gap="3">
        {description && (
          <Box
            style={{
              background: '#F8F0ED',
              borderRadius: '20px',
            }}
            p="4"
          >
            <ShadowExpandable>
              <Markdown children={description} />
            </ShadowExpandable>
          </Box>
        )}
        <Button href={data.src} target="_blank">
          <span>Baixar dados</span>
          <Icon path={mdiDownload} size="24px" />
        </Button>
      </Flex>

      {source && <cite>Fonte: {source}</cite>}
    </Flex>
  )
}
