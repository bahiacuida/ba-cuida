import { Chart } from '../Chart'

const meta = {
  title: 'Chart / perfil_trabalhadores',
  component: Chart,
  parameters: {
    // layout: 'fullscreen',
  },
}

export default meta
export const chart_geral = {
  args: {
    type: 'pie',
    data: {
      src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTxSCRbFCJKfp-FRnzptjVDAI8-Y-4_VFFOFteQiSCJa2HnL8L7A3A7MhUSSJOrpaVGYxpmm4ZrElZ4/pub?output=csv',
      valueKey: 'total',
      labelKey: 'ocup_cuidado',
      filter: {
        genero: 'Total',
      },
      groupBy: {
        keys: ['genero', 'ocup_cuidado'],
      },
    },
  },
}

export const chart_genero = {
  args: {
    type: 'pie',
    data: {
      src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTxSCRbFCJKfp-FRnzptjVDAI8-Y-4_VFFOFteQiSCJa2HnL8L7A3A7MhUSSJOrpaVGYxpmm4ZrElZ4/pub?output=csv',
      valueKey: 'total',
      labelKey: 'genero',
      filter: {
        ocup_cuidado: 'cuidado',
        genero: ['Mulher', 'Homem'],
      },
      groupBy: {
        keys: ['genero'],
      },
    },
  },
}

export const chart_raca = {
  args: {
    type: 'pie',
    data: {
      src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSSstGjcU0zHqMBFhdZ1VOrnQHDeDEMouXkkP9IHTn3RpfjXmVj0hh3NXDIJAO1LeVfah3kI9H8TaSL/pub?gid=9336838&single=true&output=csv',
      valueKey: 'total',
      labelKey: 'raça',
      filter: {
        profissão_cuidado: 'cuidado',
        gênero: ['Mulheres', 'Homens'],
      },
      groupBy: {
        keys: ['raça'],
      },
    },
  },
}

export const chart_idade = {
  args: {
    type: 'pie',
    data: {
      src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQrR8cTsbLzGnx7Ro1yiDmYDjDHKXUBJfSUl519SAswof1ZVPd7JGiGmsgyU_ASGnn8ITKripGXJcrp/pub?gid=2128398894&single=true&output=csv',
      valueKey: 'total',
      labelKey: 'idade',
      filter: {
        profissão_cuidado: 'cuidado',
        gênero: ['Mulheres'],
      },
      groupBy: {
        keys: ['idade'],
      },
    },
  },
}

export const chart_escolaridade = {
  args: {
    type: 'pie',
    data: {
      src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTT2fmyoy69EupGYhVY7QHFZWHY-gHd7xgC_6dZVxcvRiTcQVfPEk6TkgQdCE7NMS_af-ppYPZzUBsi/pub?gid=68453628&single=true&output=csv',
      valueKey: 'total',
      labelKey: 'escolaridade',
      filter: {
        profissão_cuidado: 'cuidado',
        gênero: ['Mulheres', 'Homens'],
      },
      groupBy: {
        keys: ['escolaridade'],
      },
    },
  },
}
