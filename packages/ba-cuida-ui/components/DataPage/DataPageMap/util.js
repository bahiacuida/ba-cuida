import { quantile } from 'd3-array'
import { interpolateBlues } from 'd3-scale-chromatic'
import { dsvFormat } from 'd3-dsv'

const COLOR_COUNT = 5

export function buildQuantileScale({
  data,
  valueKey,
  interpolateColor = interpolateBlues,
}) {
  const values = data
    .map((d) => d[valueKey])
    .filter((v) => v != null && !Number.isNaN(v))
    .sort((a, b) => a - b)

  if (!values.length) return null

  // breaks at 20%, 40%, 60%, 80%
  const ps = [0.2, 0.4, 0.6, 0.8]
  const breaks = ps.map((p) => quantile(values, p))

  // 5 colors from light → dark
  const colors = Array.from({ length: COLOR_COUNT }, (_, i) =>
    interpolateColor((i + 0.5) / COLOR_COUNT),
  )

  return [
    'step',
    ['get', valueKey],

    // default < first break
    colors[0],

    breaks[0],
    colors[1],
    breaks[1],
    colors[2],
    breaks[2],
    colors[3],
    breaks[3],
    colors[4],
  ]
}

export async function csvToGeoJson({ src }) {
  const features = await fetch(src)
    .then((res) => res.text())
    .then((text) => {
      return dsvFormat(',').parse(text, (entry) => {
        const georef_location = entry.georef_location || ''

        let [lat, lng] = georef_location.split('\\,')
        lat = parseFloat(lat)
        lng = parseFloat(lng)

        if (Number.isNaN(lat) || Number.isNaN(lng)) {
          return null
        }

        return {
          properties: entry,
          geometry: {
            type: 'Point',
            coordinates: [lng, lat],
          },
        }
      })
    })

  return {
    type: 'FeatureCollection',
    features,
  }
}
