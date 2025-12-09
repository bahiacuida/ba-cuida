import { Chart } from '../Chart'

const meta = {
  title: 'Chart / cuidado_nao_remunerado_tipos',
  component: Chart,
  parameters: {
    // layout: 'fullscreen',
  },
}

export default meta

export const atv_domestica = {
  args: {
    type: 'bar',
    layout: 'vertical',
    data: {
      src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT64-428iqDeda4LXHKyZvp3HzPdoogCJI8zztd6WjWIpz00HMhTJ3JCHqc419lQowmqhexWOhnB9B6/pub?gid=1787549607&single=true&output=csv',
      valueKey: '%_pessoas',
      labelKey: 'Gênero',
      filter: {
        Local: 'Bahia',
        Gênero: ['Homens', 'Mulheres'],
        Ano: '2022',
      },
      transpose: {
        groupByKeys: ['Local', 'Tipo atividade', 'Ano'],
        labelKey: 'Gênero',
      },
    },
    barGroupKey: 'Tipo atividade',
    bars: [
      { dataKey: 'Homens', fill: 'red', stackId: 'a' },
      { dataKey: 'Mulheres', fill: 'green', stackId: 'a' },
    ],
  },
}

export const outras_atv = {
  args: {
    type: 'bar',
    layout: 'vertical',
    data: {
      src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQubsO9Y8_hH5C4_cw9i0Uy1H8kCDm25wqydB0euErB5gjDA2kV0cHfocn3ECppgfE21ssXZmqInPgY/pub?gid=1608397417&single=true&output=csv',
      valueKey: '%_pessoas',
      labelKey: 'Sexo',
      filter: {
        Local: 'Bahia',
        Sexo: ['Homens', 'Mulheres'],
        Ano: '2022',
      },
      transpose: {
        groupByKeys: ['Local', 'Tipo de cuidado', 'Ano'],
        labelKey: 'Sexo',
      },
    },
    barGroupKey: 'Tipo de cuidado',
    bars: [
      { dataKey: 'Homens', fill: 'red', stackId: 'a' },
      { dataKey: 'Mulheres', fill: 'green', stackId: 'a' },
    ],
  },
}

