import { Chart } from '../Chart'

const meta = {
  title: 'Chart / motivo_nao_procurar_trabalho',
  component: Chart,
  parameters: {
    // layout: 'fullscreen',
  },
}

export default meta

export const geral = {
  args: {
    type: 'bar',
    layout: 'vertical',
    data: {
      src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQdNOXUQ41jvKlauJEsdeY3Ds0odp4UEIBVl-jUl92k8RF47yFt5VCdzHIFppx2xkvDOoHWNva5MLMj/pub?gid=210513281&single=true&output=csv',
      valueKey: 'total',
      labelKey: 'gênero',
      filter: {
        gênero: ['Mulheres', 'Homens'],
      },
      transpose: {
        groupByKeys: ['motivo_nao_procurar'],
      },
    },
    barGroupKey: 'motivo_nao_procurar',
    bars: [
      { dataKey: 'Mulheres', fill: 'red' },
      { dataKey: 'Homens', fill: 'green' },
    ],
  },
}
