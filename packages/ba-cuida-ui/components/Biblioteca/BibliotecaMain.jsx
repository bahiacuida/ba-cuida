import { Button, Flex, Input, LoadingOverlay } from '@orioro/react-ui-core'
import { useQuery } from '@tanstack/react-query'
import { dsvFormat } from 'd3-dsv'
import { SiteWidthContainer } from '@/components/SiteWidthContainer'
import { entries, uniq } from 'lodash-es'
import { useMemo, useState } from 'react'
import { Table } from '@radix-ui/themes'
import Icon from '@mdi/react'
import { mdiOpenInNew } from '@mdi/js'
import { slugify } from '@orioro/util'
import styled from 'styled-components'

const BIBLIOTECA_CSV_SRC = `https://docs.google.com/spreadsheets/d/e/2PACX-1vRAKOKn3ABJ7B2yYyijMv5J_QjW6MnhGQ1iliBXeC92i1qJOI6mW713ybbaM_8djT0DDyio0Dda5vQP/pub?gid=0&single=true&output=csv`

const FORMAT_KEY = 'Formatos (cartilha, recomendação, música, vídeo, etc)'
const TITLE_KEY = 'Título'
const AUTHOR_KEY = 'Autoria'
const URL_KEY = 'Arquivo ou Link'

const TColumnHeaderCell = styled(Table.ColumnHeaderCell)`
  text-transform: uppercase;
  color: var(--marrom-texto);
`

function _applyFilter(entries, filter) {
  return entries.filter((entry) => {
    const matchesFormat =
      filter.format && filter.format !== '_all'
        ? entry[FORMAT_KEY] === filter.format
        : true

    const matchesSearchText = filter.searchText
      ? slugify(
          [entry[TITLE_KEY], entry[AUTHOR_KEY], entry[URL_KEY]].join(' '),
        ).includes(slugify(filter.searchText))
      : true

    return matchesFormat && matchesSearchText
  })
}

const INITIAL_FILTER_STATE = {
  searchText: '',
  format: null,
}

export function BibliotecaMain() {
  const [filter, setFilter] = useState(INITIAL_FILTER_STATE)

  const entriesQuery = useQuery({
    queryKey: ['BibliotecaMain', 'entries'],
    queryFn: async () => {
      const entries = await fetch(BIBLIOTECA_CSV_SRC)
        .then((res) => res.text())
        .then((csv) => dsvFormat(',').parse(csv))

      return entries
    },
  })

  const formatOptions = useMemo(() => {
    return entriesQuery.data
      ? [
          { label: 'Todos', value: '_all' },
          ...uniq(entriesQuery.data.map((e) => e[FORMAT_KEY])).map((fmt) => ({
            label: fmt,
            value: fmt,
          })),
        ]
      : []
  }, [entriesQuery.data])

  const filteredEntries = useMemo(() => {
    return entriesQuery.data ? _applyFilter(entriesQuery.data, filter) : []
  }, [entriesQuery.data, filter])

  return (
    <section>
      <SiteWidthContainer>
        <Flex
          style={{
            position: 'relative',
          }}
          alignItems="center"
          gap="4"
          pb="200px"
        >
          <Flex direction="row" gap="4">
            <label>
              <Flex>
                Busca
                <Input
                  schema={{
                    type: 'text',
                    clerable: true,
                    placeholder: 'Digite uma palavra',
                    validate: false,
                  }}
                  value={filter.searchText}
                  onSetValue={(nextSearchText) =>
                    setFilter((curr) => ({
                      ...curr,
                      searchText: nextSearchText || '',
                    }))
                  }
                />
              </Flex>
            </label>
            <label>
              <Flex>
                Formato
                <Input
                  schema={{
                    type: 'select',
                    placeholder: 'Selecione um formato',
                    options: formatOptions,
                  }}
                  value={filter.format}
                  onSetValue={(format) =>
                    setFilter((curr) => ({
                      ...curr,
                      format,
                    }))
                  }
                />
              </Flex>
            </label>
          </Flex>

          {entriesQuery.status !== 'pending' && (
            <>
              {filteredEntries.length === 0 && (
                <Flex>
                  <span>Não foram encontrados resultados para a sua busca</span>
                  <Button onClick={() => setFilter(INITIAL_FILTER_STATE)}>
                    Limpar filtros
                  </Button>
                </Flex>
              )}

              {filteredEntries.length > 0 && (
                <Table.Root
                  style={{
                    width: '100%',
                  }}
                >
                  <Table.Header>
                    <Table.Row>
                      <TColumnHeaderCell>Formato</TColumnHeaderCell>
                      <TColumnHeaderCell>Título</TColumnHeaderCell>
                      <TColumnHeaderCell>Autoria</TColumnHeaderCell>
                      <TColumnHeaderCell>Acesso</TColumnHeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {filteredEntries.map((entry, index) => (
                      <Table.Row
                        align="center"
                        key={entry[URL_KEY] + entry[TITLE_KEY]}
                        style={{
                          background:
                            index % 2 === 0 ? 'var(--orange-2)' : 'transparent',
                        }}
                      >
                        <Table.Cell>{entry[FORMAT_KEY]}</Table.Cell>
                        <Table.Cell
                          style={{
                            fontWeight: 'bold',
                          }}
                        >
                          {entry[TITLE_KEY]}
                        </Table.Cell>
                        <Table.Cell>{entry[AUTHOR_KEY]}</Table.Cell>
                        <Table.Cell>
                          <Button href={entry[URL_KEY]} target="_blank">
                            <span
                              style={{
                                whiteSpace: 'nowrap',
                              }}
                            >
                              Acessar conteúdo
                            </span>
                            <Icon path={mdiOpenInNew} size="16px" />
                          </Button>
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table.Root>
              )}
            </>
          )}

          {entriesQuery.status === 'pending' && <LoadingOverlay />}
        </Flex>
      </SiteWidthContainer>
    </section>
  )
}
