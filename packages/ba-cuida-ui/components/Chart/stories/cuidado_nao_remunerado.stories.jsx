import { Chart } from '../Chart'

const meta = {
  title: 'Chart / cuidado_nao_remunerado',
  component: Chart,
  parameters: {
    // layout: 'fullscreen',
  },
}

export default meta

export const geral = {
  args: {
    type: 'bar',
    data: {
      src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRjq4whi-6N0VIdOw_v3GRAM4JDDRwe4YHpm5E6Jtdt9UM29y2pE11zi6btZ9pf1X-S1oi3yTx_nDVf/pub?gid=37489205&single=true&output=csv',
      valueKey: 'Quantidade_horas',
      labelKey: 'gênero',
      filter: {
        local: 'Bahia',
        gênero: ['Homens', 'Mulheres'],
      },
      transpose: {
        groupByKeys: ['Ano', 'local'],
        labelKey: 'gênero',
      },
    },
    barGroupKey: 'Ano',
    bars: [
      { dataKey: 'Homens', fill: 'red' },
      { dataKey: 'Mulheres', fill: 'green' },
    ],
  },
}

export const raca = {
  args: {
    type: 'bar',
    data: {
      src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSpzpV9UZuJ3PssiBGq1vUAYrpU-N3L9MfmBhKoOHcn1dheq8RkCHgs-wBWvhEzsr4UEIJ1yqD7Gd4l/pub?gid=2082105150&single=true&output=csv',
      valueKey: 'media_horas',
      labelKey: 'Raça',
      filter: {
        Local: 'Bahia',
        Gênero: ['homens', 'mulheres'],
      },
      transpose: {
        groupByKeys: ['Ano', 'local'],
        labelKey: 'Raça',
      },
    },
    barGroupKey: 'Ano',
    bars: [
      { dataKey: 'Branca', fill: 'red' },
      { dataKey: 'Negra', fill: 'green' },
    ],
  },
}

export const idade = {
  args: {
    type: 'bar',
    data: {
      src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR1y-MYewpIycJh1ZcT6vqYyBoFjFMc_cX1LUQfpJBJc5NYftxhmtq5y-mMG_AErGCQm559WEb5qTHO/pub?gid=1687049639&single=true&output=csv',
      valueKey: 'media_horas',
      labelKey: 'Grupo de idade',
      filter: {
        local: 'Bahia',
        Ano: '2022',
        Sexo: ['Homens', 'Mulheres'],
      },
      transpose: {
        groupByKeys: ['local', 'Ano', 'Sexo'],
        labelKey: 'Grupo de idade',
      },
    },
    barGroupKey: 'Sexo',
    bars: [
      { dataKey: '14 a 24 anos', fill: 'red' },
      { dataKey: '25 a 49 anos', fill: 'green' },
      { dataKey: '50 anos ou mais', fill: 'blue' },
    ],
  },
}

export const ocupacao = {
  args: {
    type: 'bar',
    data: {
      src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRjq4whi-6N0VIdOw_v3GRAM4JDDRwe4YHpm5E6Jtdt9UM29y2pE11zi6btZ9pf1X-S1oi3yTx_nDVf/pub?gid=2078497031&single=true&output=csv',
      valueKey: 'Quantidade_horas',
      labelKey: 'Tipo da ocupação',
      filter: {
        local: 'Bahia',
        Ano: '2022',
        gênero: ['Homens', 'Mulheres'],
      },
      transpose: {
        groupByKeys: ['local', 'Ano', 'gênero'],
        labelKey: 'Tipo da ocupação',
      },
    },
    barGroupKey: 'gênero',
    bars: [
      { dataKey: 'Não ocupadas', fill: 'red' },
      { dataKey: 'Ocupadas', fill: 'green' },
    ],
  },
}
