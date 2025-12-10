import { resolveDataSrc } from '@/components/Chart/data/resolveDataSrc'
import { LayeredMap, useHover, HoverTooltip } from '@orioro/react-maplibre-util'
import { Flex, Input } from '@orioro/react-ui-core'
import { useQuery } from '@tanstack/react-query'
import { keyBy } from 'lodash-es'
import { useState } from 'react'
import { buildQuantileScale, csvToGeoJson } from './util'
import { interpolatePurples } from 'd3-scale-chromatic'
import { dsvFormat } from 'd3-dsv'

const BAHIA_GEOJSON_URL = `https://servicodados.ibge.gov.br/api/v3/malhas/estados/BA?formato=application/vnd.geo+json&intrarregiao=municipio`

const PCT_FMT = new Intl.NumberFormat('pt-BR', {
  style: 'percent',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
})

const CENSO_VARIABLES = [
  {
    id: 'qtd_criancas_pct',
    label: '% crianças na população',
    selectLabel: 'Crianças (0-9 anos)',
    fmt: (value) => PCT_FMT.format(value),
  },
  {
    id: 'qtd_adolescentes_pct',
    label: '% adolescentes na população',
    selectLabel: 'Adolescentes (10-19 anos)',
    fmt: (value) => PCT_FMT.format(value),
  },
  {
    id: 'qtd_idosos_pct',
    label: '% pessoas idosas na população',
    selectLabel: 'Pessoas idosas (60+ anos)',
    fmt: (value) => PCT_FMT.format(value),
  },
  {
    id: 'renda_media_responsavel',
    label: 'Renda média responsável',
    fmt: (value) =>
      new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(value),
  },
]

const DEFAULT_HEATMAP_PAINT = {
  // Adjust the heatmap radius by zoom level
  'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 0, 2, 4, 8],
  'heatmap-color': [
    'interpolate',
    ['linear'],
    ['heatmap-density'],

    // density   color
    0.0,
    'rgba(237, 248, 233, 0)', // #edf8e9 (transparent)
    0.2,
    '#c7e9c0',
    0.4,
    '#a1d99b',
    0.6,
    '#74c476',
    0.8,
    '#31a354',
    1.0,
    '#006d2c',
  ],
}

const EQUIPMENT_SPECS = [
  {
    id: 'ilpi',
    label: 'Instituições de Longa Permanência para pessoas Idosas',
    fetchGeoJson: async () =>
      csvToGeoJson({
        src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRB_d33OnAu4lAyl181cE2QekJLTbhpwDEa2OFHjlPlxT3_G_GSlZl3hRQBN-ygk9RkOv5OX_8qqxdl/pub?gid=699838852&single=true&output=csv',
      }),
    paint: {
      ...DEFAULT_HEATMAP_PAINT,
      // 'heatmap-radius': 10,
    },
  },
  {
    id: 'rede_suas',
    label: 'Equipamentos da Rede SUAS',
    fetchGeoJson: async () =>
      csvToGeoJson({
        src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTldatXBorMGDYcXeuQ5jr4s4qygxEzlc26NQgh1_yhigEvNzkA6LSyVrUdKOVRxsPeHCr8ge_w7oQ2/pub?gid=372801057&single=true&output=csv',
      }),
    paint: {
      ...DEFAULT_HEATMAP_PAINT,
      // 'heatmap-radius': 5,
    },
  },
  {
    id: 'ubs',
    label: 'Unidades Básicas de Saúde',
    fetchGeoJson: async () =>
      csvToGeoJson({
        src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQZ85ylSHRMN8RlHAv6kCoCJMP-CU8lcnla6doYqXOhlALUkxqlo_SjzXR-r_HmqrPZA5A-9hzMCYf0/pub?gid=1114679760&single=true&output=csv',
      }),
    paint: {
      ...DEFAULT_HEATMAP_PAINT,
      'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 0, 2, 3, 5],
    },
  },
  {
    id: 'upa',
    label: 'Unidades de Pronto Atendimento',
    fetchGeoJson: async () =>
      csvToGeoJson({
        src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT4ND830Lvi-1hsERILNrJ2tyrrCULAw-uyxNto08AP967CYQUVVQJpX1ZSGaIsS-ladr0G3nI9genF/pub?gid=1926780337&single=true&output=csv',
      }),
    paint: {
      ...DEFAULT_HEATMAP_PAINT,
      // 'heatmap-radius': 10,
    },
  },
]
const EQUIPMENT_SPECS_BY_ID = keyBy(EQUIPMENT_SPECS, 'id')

export function DataPageMap() {
  //
  // Censo controls
  //
  const [censoDataKey, setCensoDataKey] = useState(CENSO_VARIABLES[0].id)

  const censoGeoJsonQuery = useQuery({
    queryKey: ['censoGeoJsonQuery', censoDataKey],
    throwOnError: process.env.NODE_ENV !== 'production',
    retry: process.env.NODE_ENV === 'production',
    placeholderData: (prevData) => prevData,
    queryFn: async () => {
      const censoData = await fetch('/data/ba-municipios-censo-2022.csv')
        .then((res) => res.text())
        .then((text) => {
          return dsvFormat(',').parse(text, (entry) => ({
            ...entry,
            ...Object.fromEntries(
              CENSO_VARIABLES.map((v) => v.id).map((numKey) => [
                numKey,
                parseFloat(entry[numKey]),
              ]),
            ),
          }))
        })

      console.log('censoData', censoData)

      // const censoData = await resolveDataSrc({
      //   src: '/data/ba-municipios-censo-2022.csv',
      //   numericKeys: CENSO_VARIABLES.map((v) => v.id),
      // })

      const colorScale = buildQuantileScale({
        data: censoData,
        valueKey: censoDataKey,
        interpolateColor: interpolatePurples,
      })

      const geoJson = await fetch(BAHIA_GEOJSON_URL)
        .then((res) => res.json())
        .then((geoJson) => {
          const dataByCdMun = keyBy(censoData, 'cd_mun')

          return {
            ...geoJson,
            features: geoJson.features.map((feat) => {
              const codarea = feat.properties.codarea
              const featData = dataByCdMun[codarea] || {}

              return {
                ...feat,
                properties: {
                  // ...feat.properties,
                  ...featData,
                },
              }
            }),
          }
        })

      return {
        data: censoData,
        geoJson,
        colorScale,
      }
    },
  })

  //
  // Equipment controls
  //
  const [equipmentId, setEquipmentId] = useState('ubs')

  const equipmentGeoJsonQuery = useQuery({
    queryKey: ['equipmentGeoJsonQuery', equipmentId],
    queryFn: async () => {
      const equipmentSpec = EQUIPMENT_SPECS_BY_ID[equipmentId]
      return equipmentSpec ? equipmentSpec.fetchGeoJson() : null
    },
    throwOnError: process.env.NODE_ENV !== 'production',
    retry: process.env.NODE_ENV === 'production',
  })

  //
  // Hover
  //
  const [{ children: hoverChildren, ...hoverProps }, hoverInfo, isDragging] =
    useHover(
      {
        tooltip: ({ point, features }) => {
          const tooltipDataSections = features
            .flatMap((feature) => {
              return {
                entries: [
                  ['Município', feature.properties.nm_mun],
                  ...CENSO_VARIABLES.map((cvar) => [
                    cvar.label,
                    cvar.fmt(feature.properties[cvar.id]),
                  ]),
                ],
              }
            })
            .filter(Boolean)

          return (
            tooltipDataSections.length > 0 && (
              <HoverTooltip
                position={point}
                dataSections={tooltipDataSections}
              />
            )
          )
        },
      },
      [],
    )

  return (
    <Flex direction="column" gap="3">
      <Flex direction="row" justifyContent="center" gap="3">
        <Input
          schema={{
            type: 'select',
            label: 'População prioritária',
            options: CENSO_VARIABLES.map((v) => ({
              value: v.id,
              label: v.selectLabel || v.label,
            })),
          }}
          value={censoDataKey}
          onSetValue={setCensoDataKey}
        />
        <Input
          schema={{
            type: 'select',
            label: 'Equipamentos',
            options: EQUIPMENT_SPECS.map((eq) => ({
              value: eq.id,
              label: eq.label,
            })),
          }}
          value={equipmentId}
          onSetValue={setEquipmentId}
        />
      </Flex>
      {censoGeoJsonQuery.data && (
        <LayeredMap
          {...hoverProps}
          initialViewState={{
            longitude: -42.02,
            latitude: -13.15,
            zoom: 4.7,
          }}
          mapStyle={`https://api.maptiler.com/maps/dataviz/style.json?key=${process.env.STORYBOOK_MAP_TILER_API_KEY}`}
          style={{
            height: '70vh',
            width: '100%',
          }}
          views={[
            {
              id: 'geojson',
              sources: {
                bahia: {
                  type: 'geojson',
                  promoteId: 'codarea',
                  data: censoGeoJsonQuery.data.geoJson,
                },
                equipments: {
                  type: 'geojson',
                  data: equipmentGeoJsonQuery.data || {
                    type: 'FeatureCollection',
                    features: [],
                  },
                },
              },
              layers: {
                bahia: {
                  interactive: true,
                  type: 'fill',
                  source: 'bahia',
                  paint: {
                    'fill-color': censoGeoJsonQuery.data.colorScale,
                    'fill-opacity': 0.7,
                  },
                },
                equipments: {
                  type: 'circle',
                  source: 'equipments',
                  paint: {
                    'circle-color': 'green',
                  },
                },
                equipments: {
                  type: 'heatmap',
                  source: 'equipments',
                  paint: equipmentId
                    ? EQUIPMENT_SPECS_BY_ID[equipmentId]?.paint || {}
                    : {},
                },
              },
            },
          ]}
        >
          {hoverChildren}
        </LayeredMap>
      )}
    </Flex>
  )
}
