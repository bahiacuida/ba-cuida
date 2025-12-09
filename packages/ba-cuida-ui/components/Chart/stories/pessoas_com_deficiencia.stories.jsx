import { Chart } from '../Chart'

const meta = {
  title: 'Chart / pessoas_com_deficiencia',
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
      src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQyAbfhxH75h2XSPoc7-hTZDjXvy1juv8KRe2kN78-H69vCiJCL1lcHzBDRPFaKJcaxOG6l-gXyKSrE/pub?gid=0&single=true&output=csv',
      valueKey: 'total',
      labelKey: 'gênero',
      filter: {
        local: 'Abaíra (BA)',
        com_ou_sem_deficiencia: 'com_deficiencia',
      },
      // transpose: {
      //   groupByKeys: ['motivo_nao_procurar'],
      // },
      // groupBy: {
      //   keys: ['gênero', 'motivo_nao_procurar'],
      // },
    },
    barGroupKey: 'local',
    bars: [{ dataKey: 'total_pcd', fill: 'red' }],
  },
}

export const genero = {
  args: {
    type: 'pie',
    data: {
      src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRQLc4yd_Hzr2DIg5vraYQicVRAh2UB3RLaMOfqspnr4iabWQL6mSx3ubcxml8aUAOWa7dcyhofTgRO/pub?gid=370105761&single=true&output=csv',
      valueKey: 'total',
      labelKey: 'Sexo',
      filter: {
        local: 'Bahia',
        'Grupo de idade': '0. Total',
      },
    },
  },
}

export const raca = {
  args: {
    type: 'pie',
    data: {
      src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSGsWWEwBSyiGvZyFnF9MuWdgdhkSqBDdVuePu5FaCNMQk4mNdRSnX_7yHJLyWRyw0bWlEGLtBdI_yA/pub?gid=257105703&single=true&output=csv',
      valueKey: 'total',
      labelKey: 'Cor ou raça',
      filter: {
        local: 'Bahia',
        'Cor ou raça': ['Branca', 'Preta', 'Amarela', 'Parda', 'Indígena'],
      },
    },
  },
}

export const idade = {
  args: {
    type: 'bar',
    layout: 'vertical',
    data: {
      src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRQLc4yd_Hzr2DIg5vraYQicVRAh2UB3RLaMOfqspnr4iabWQL6mSx3ubcxml8aUAOWa7dcyhofTgRO/pub?gid=370105761&single=true&output=csv',
      valueKey: 'total',
      labelKey: 'Cor ou raça',
      filter: {
        local: 'Bahia',
        'Grupo de idade': [
          'a. 2 a 4 anos',
          'b. 5 a 9 anos',
          'c. 10 a 14 anos',
          'd. 15 a 19 anos',
          'e. 20 a 24 anos',
          'f. 25 a 29 anos',
          'g. 30 a 34 anos',
          'h. 35 a 39 anos',
          'i. 40 a 44 anos',
          'j. 45 a 49 anos',
          'k. 50 a 54 anos',
          'l. 55 a 59 anos',
          'm. 60 a 69 anos',
          'n. 70 anos ou mais',
        ],
      },
      groupBy: {
        keys: ['local', 'Grupo de idade'],
      },
    },
    barGroupKey: 'Grupo de idade',
    bars: [{ dataKey: 'total', fill: 'red' }],
  },
}

export const tipos_dificuldade = {
  args: {
    type: 'bar',
    layout: 'vertical',
    data: {
      src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR5fK_zya5GrpUAeET7dNWvOmKJXMPWE9f53WHF3haCIQT6nfOZqsvYyYLUAk7VTtkFlgLeFzTyQ68q/pub?gid=1621798246&single=true&output=csv',
      valueKey: 'total',
      labelKey: 'Grau de dificuldade',
      filter: {
        local: 'Bahia',
      },
      groupBy: {
        keys: [
          'local',
          'Tipos de dificuldades funcionais',
          'Grau de dificuldade',
        ],
      },
      transpose: {
        groupByKeys: ['local', 'Tipos de dificuldades funcionais'],
      },
    },
    barGroupKey: 'Tipos de dificuldades funcionais',
    bars: [
      { dataKey: 'Tem muita dificuldade', fill: 'red' },
      { dataKey: 'Tem, não consegue de modo algum', fill: 'green' },
    ],
  },
}

export const qtd_dificuldades = {
  args: {
    type: 'pie',
    data: {
      src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwklFs6CMVcDFSOVqQ-3bjDQ8eK3AtQ9_oFVqml0UlIbodHyPVImsa8oyHDTc4s6qy5DFmZCGVpQ9n/pub?gid=589610093&single=true&output=csv',
      valueKey: 'Total',
      labelKey: 'quantidade de dificuldades',
      filter: {
        Local: 'Bahia',
      },
    },
  },
}

export const analfabetismo = {
  args: {
    type: 'bar',
    data: {
      src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTlNvcOYsZ-tJ2T1Rp4D8DL7joPmhsQBnOXF5KT6naauWyaY8d5P_f8EVnzI3mOo3-2zzoOiV5VFcz5/pub?gid=73236922&single=true&output=csv',
      valueKey: 'taxa_analfabetismo',
      labelKey: 'Existência de deficiência',
      filter: {
        local: 'Bahia',
        // 'Grupo de idade': '15 a 17 anos',
      },
      transpose: {
        groupByKeys: ['local', 'Grupo de idade'],
      },
    },
    barGroupKey: 'Grupo de idade',
    bars: [
      { dataKey: 'Pessoa com deficiência', fill: 'red' },
      { dataKey: 'Pessoa sem deficiência', fill: 'green' },
    ],
  },
}

export const trabalho = {
  args: {
    type: 'bar',
    data: {
      src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQA6Ahe5uho3bZvXjFKw9zUfQvlTq6S_xB8tYfnbDyDRgzxnc7ASgiK6LU3FPLfYkG7Gj4d9OlL_-wx/pub?gid=1876355937&single=true&output=csv',
      valueKey: 'porcentagem_pessoas',
      labelKey:
        'Condição em relação à força de trabalho na semana de referência',
      filter: {
        Sexo: 'Total',
      },
      transpose: {
        groupByKeys: ['Sexo', 'Existência de deficiência'],
      },
    },
    barGroupKey: 'Existência de deficiência',
    bars: [
      { dataKey: 'Fora da força de trabalho', fill: 'red' },
      { dataKey: 'Na força de trabalho', fill: 'green' },
    ],
  },
}
