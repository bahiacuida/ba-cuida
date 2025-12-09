import { POPULACAO_PRIORITARIA } from './constants'

export const PESSOAS_C_DEFICIENCIA = {
  // cardTitle: '79% das pessoas com deficiência são negras',
  // cardDescription: 'Perfil racial das pessoas com deficiência (PCDs) no Estado',
  axis: POPULACAO_PRIORITARIA,
  categories: ['Perfil Populacional'],

  //
  // Body
  //
  title: 'Quem são as pessoas com deficiência na Bahia?',
  summaryCards: [
    {
      children: '1.903.719 pessoas com deficiência vivem na Bahia',
    },
    {
      children:
        'a taxa de analfabetismo é 3x maior entre pessoas com deficiência',
    },
  ],
  details: `O indicador apresenta a quantidade e as principais características das pessoas com deficiência no Estado da Bahia. Ele reúne informações sobre gênero, idade, raça, bem como sobre o tipo e a intensidade das dificuldades funcionais enfrentadas por essa população. Pessoas com deficiência integram um dos grupos prioritários definidos pela Política Nacional do Cuidado.

### Por quê esse indicador é importante?

Ele é importante porque permite compreender quem são as pessoas que mais demandam cuidados, quais barreiras enfrentam no cotidiano e como o poder público pode estruturar respostas mais adequadas e equitativas. Sem esse tipo de informação, políticas de cuidado correm o risco de não alcançar quem realmente precisa.

### O que fazer para melhorar este indicador?

Para melhorar esse indicador, é fundamental aperfeiçoar a coleta de dados, ampliando e qualificando as informações obtidas em pesquisas domiciliares, especialmente no que diz respeito aos tipos de deficiência e aos diferentes níveis de dependência. Também é necessário reduzir a subnotificação, por meio de campanhas de orientação à população e da capacitação de agentes responsáveis pela coleta, garantindo maior precisão no preenchimento dos questionários. Outro passo importante é detalhar recortes essenciais — como gênero, raça/cor, faixa etária, território e renda — e incorporar informações sobre o acesso a serviços de saúde, assistência, educação e transporte, permitindo um diagnóstico mais completo das necessidades de cuidado.`,

  //
  // Charts
  //
  charts: [
    {
      title: 'Total de pessoas com deficiência',
      source: 'Elaboração própria, a partir dos dados do Censo 2022',
      description: `O gráfico mostra o número de pessoas moradoras do estado da Bahia que declararam possuir algum tipo de deficiência no Censo de 2022.  Naquele ano, o estado contava com mais de 1 milhão de pessoas com deficiência.

É possível filtrar os dados e ver os número para cada município, e comparar os número de pessoas com e sem deficiência em cada local`,

      userFilterSpec: ['local'],
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
      bars: [{ dataKey: 'total_pcd' }],
    },

    {
      title: 'Pessoas com deficiência por gênero',
      source: 'Elaboração própria, a partir dos dados do Censo 2022',
      description: `O gráfico mostra a comparação entre o número de homens e mulheres com deficiência no estado da Bahia, de acordo com informações do Censo de 2022.

É possível filtrar os dados e ver os número para cada município, e separados para cada grupo de idade.`,
      userFilterSpec: ['local', 'Grupo de idade'],
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

    {
      title: 'Pessoas com deficiência por raça',
      source: 'Elaboração própria, a partir dos dados do Censo 2022',
      description: `O gráfico mostra a comparação entre a raça das pessoas com deficiência no estado da Bahia, de acordo com informações do Censo de 2022.

É possível filtrar os dados e ver os número para cada município.`,
      userFilterSpec: ['local'],
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

    {
      title: 'Pessoas com deficiência por idade',
      source: 'Elaboração própria, a partir dos dados do Censo 2022',
      description: `O gráfico mostra o número de pessoas com deficiência na Bahia em cada grupo de idade.

É possível filtrar os dados e ver os número para cada município, e separados por gênero.`,
      userFilterSpec: ['local'],
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
      bars: [{ dataKey: 'total' }],
    },

    {
      title: 'Tipos de dificuldades funcionais de pessoas com deficiência',
      source: 'Elaboração própria, a partir dos dados do Censo 2022',
      description: `O gráfico mostra o número de pessoas com deficiência pelo tipo de dificuldade funcional que elas enfrentam em seu dia a dia, além do nível de dificuldade.

É possível filtrar os dados e ver os número para cada município.`,
      userFilterSpec: ['local'],
      type: 'bar',
      layout: 'vertical',
      data: {
        src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR5fK_zya5GrpUAeET7dNWvOmKJXMPWE9f53WHF3haCIQT6nfOZqsvYyYLUAk7VTtkFlgLeFzTyQ68q/pub?gid=1621798246&single=true&output=csv',
        valueKey: 'total',
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
          transposeToColumnKey: 'Grau de dificuldade',
        },
      },
      barGroupKey: 'Tipos de dificuldades funcionais',
      bars: [
        { dataKey: 'Tem muita dificuldade' },
        { dataKey: 'Tem, não consegue de modo algum' },
      ],
    },

    {
      title: 'quantidade de pessoas com uma ou mais dificuldades funcionais',
      source: 'Elaboração própria, a partir dos dados do Censo 2022',
      description: `O gráfico mostra o número de pessoas com deficiência e a quantidade de dificuldades funcionais que enfrentam em seu dia a dia. Ou seja, esses dados nos mostram quantas pessoas acumulam mais de um tipo de deficiência.

É possível filtrar os dados e ver os número para cada município.`,
      userFilterSpec: ['Local'],
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

    {
      title: 'taxa de analfabetismo em pessoas com deficiência',
      source: 'Elaboração própria, a partir dos dados do Censo 2022',
      description: `O gráfico compara a taxa de analfabetismo entre a população com e sem deficiência no estado da Bahia. É possível observar que a proporção de pessoas analfabetas é 3x maior entre aquelas que possuem alguma deficiência.

É possível filtrar os dados e ver os número para cada município, e para cada grupo de idade.`,
      userFilterSpec: ['local'],
      type: 'bar',
      data: {
        src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTlNvcOYsZ-tJ2T1Rp4D8DL7joPmhsQBnOXF5KT6naauWyaY8d5P_f8EVnzI3mOo3-2zzoOiV5VFcz5/pub?gid=73236922&single=true&output=csv',
        valueKey: 'taxa_analfabetismo',
        filter: {
          local: 'Bahia',
          // 'Grupo de idade': '15 a 17 anos',
        },
        transpose: {
          groupByKeys: ['local', 'Grupo de idade'],
          transposeToColumnKey: 'Existência de deficiência',
        },
      },
      barGroupKey: 'Grupo de idade',
      bars: [
        { dataKey: 'Pessoa com deficiência' },
        { dataKey: 'Pessoa sem deficiência' },
      ],
    },

    {
      title: 'Pessoas com deficiência no mercado de trabalho na Bahia',
      source: 'Elaboração própria, a partir dos dados do Censo 2022',
      description: `O gráfico mostra o número de pessoas inseridas no mercado de trabalho e fora dele, e compara esses valores entre as populações com e sem deficiência.  taxa de analfabetismo entre a população com e sem deficiência no estado da Bahia. É possível observar que a proporção de pessoas analfabetas é 3x maior entre aquelas que possuem alguma deficiência.

É possível filtrar os dados e ver os número por gênero`,
      userFilterSpec: ['Sexo'],
      type: 'bar',
      data: {
        src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQA6Ahe5uho3bZvXjFKw9zUfQvlTq6S_xB8tYfnbDyDRgzxnc7ASgiK6LU3FPLfYkG7Gj4d9OlL_-wx/pub?gid=1876355937&single=true&output=csv',
        valueKey: 'porcentagem_pessoas',
        filter: {
          Sexo: 'Total',
        },
        transpose: {
          groupByKeys: ['Sexo', 'Existência de deficiência'],
          transposeToColumnKey:
            'Condição em relação à força de trabalho na semana de referência',
        },
      },
      barGroupKey: 'Existência de deficiência',
      bars: [
        { dataKey: 'Fora da força de trabalho' },
        { dataKey: 'Na força de trabalho' },
      ],
    },
  ],
}
