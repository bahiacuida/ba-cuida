import { Chart } from '../Chart'

const meta = {
  title: 'Chart / autismo',
  component: Chart,
  parameters: {
    // layout: 'fullscreen',
  },
}

export default meta

export const geral = {
  args: {
    type: 'pie',
    data: {
      src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQhqD-RtIVS-kCpg6csObcZCJbs3HN2lG3v0chH4Iri2LNI9Y6VaEJZFhOSXwM6TxDo1R24NT6RFlNR/pub?gid=0&single=true&output=csv',
      valueKey: 'total_pessoas',
      labelKey: 'autismo_sim_nao',
      filter: {
        local: 'Bahia',
      },
    },
  },
}

export const genero = {
  args: {
    type: 'pie',
    data: {
      src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTHOM6P3Ab-YKyYahJO-D3d5baXMXAK8XeipzmbZHCctDtvnhPr7w0nAdVEcLkB5a_djdjuLk8K6gIL/pub?gid=987780703&single=true&output=csv',
      valueKey: 'total',
      labelKey: 'gênero',
      filter: {
        local: 'Bahia',
      },
    },
  },
}

export const raca = {
  args: {
    type: 'pie',
    data: {
      src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR6NABgOT-jdfgUqEBGXw772hCpTd2GgbIXh_eemeCBULF29GscvmmzIrUof7tEUoBIrfeSmAoU_aTl/pub?gid=144141278&single=true&output=csv',
      valueKey: 'n_pessoas',
      labelKey: 'raça',
      filter: {
        local: 'Bahia',
      },
    },
  },
}

export const idade = {
  args: {
    type: 'bar',
    layout: 'vertical',
    data: {
      src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRR3-l5P-j6F4KZmrFU2vNEQEolDLDp9KHMS0OIvzO6iNHQmmB2vFQEuT2kQBSRHM2JJmeMwaxDZ2Vb/pub?gid=2086932631&single=true&output=csv',
      valueKey: 'total',
      labelKey: 'Grupo de idade',
      filter: {
        local: 'Bahia',
        gênero: 'Total',
      },
    },
    barGroupKey: 'Grupo de idade',
    bars: [{ dataKey: 'total', fill: 'red' }],
  },
}
