export const TEMPO_GASTO_CUIDADO_N_REMUNERADO = {
  //
  // Body
  //
  title: 'Qual o tempo gasto em atividades de cuidado não-remunerado na Bahia?',
  summaryCards: [
    {
      children:
        '91% das mulheres baianas realizam atividades de cuidado não remunerado',
    },
    {
      children:
        'as mulheres dedicam semanalmente o dobro do tempo dos homens às tarefas domésticas e de cuidado',
    },
  ],
  details: `O indicador “Perfil de quem realiza trabalho de cuidado não remunerado” mostra quem são as pessoas que dedicam tempo a cuidar de outras pessoas sem receber por isso, como cuidar de crianças, idosos, pessoas doentes ou das tarefas domésticas. Em geral, esse indicador busca identificar quem faz esse trabalho, considerando características como gênero e raça.

### Por quê esse indicador é importante?

Ele é importante porque revela como o cuidado é distribuído dentro das famílias e da sociedade. Na maioria dos casos, esse tipo de trabalho é feito por mulheres, o que impacta diretamente suas oportunidades de estudo, trabalho e renda. Assim, o indicador ajuda a entender as desigualdades de gênero e sociais relacionadas ao tempo e à responsabilidade pelo cuidado, servindo de base para políticas que promovam a divisão mais justa do trabalho doméstico e de cuidado.

### O que fazer para melhorar este indicador?

Para melhorar o indicador é importante reduzir as desigualdades na divisão das tarefas de cuidado entre mulheres e homens, e entre famílias e o Estado. Isso pode ser feito por meio de políticas públicas e ações sociais que valorizem e compartilhem o cuidado.

Alguns caminhos incluem ampliar a oferta de creches, escolas em tempo integral e serviços públicos de cuidado a idosos e pessoas com deficiência, para que essa responsabilidade não recaia apenas sobre as mulheres.

Também é importante estimular a participação dos homens nas tarefas domésticas e no cuidado familiar, por meio de campanhas educativas e licenças parentais igualitárias. Além disso, políticas de flexibilização da jornada de trabalho, valorização do tempo de cuidado e reconhecimento do trabalho doméstico como essencial ajudam a equilibrar as responsabilidades e promover maior igualdade entre homens e mulheres.

### Quais perguntas esse indicador ajuda a responder

- Quem são as pessoas que mais dedicam tempo ao cuidado sem receber por isso — mulheres ou homens?
- Quantas horas por semana as pessoas dedicam ao trabalho doméstico e de cuidado?
- Qual a raça das pessoas que mais dedicam tempo a esse tipo de atividade?`,

  //
  // Charts
  //
  charts: [
    {
      title: 'Tempo gasto em atividades de cuidado',
      source: 'Elaboração própria, a partir da PNAD-C 2022',
      description: `O gráfico acima apresenta a comparação entre o número de horas gastas por semana entre homens e mulheres para a realização de tarefas domésticas e de cuidado. Em geral, as mulheres dedicam o dobro de horas semanais para realizar atividades de cuidado não remunerado.

Também é possível filtrar os dados para o município de Salvador, para a região Nordeste e para o Brasil. Também é possível visualizar os dados totais (ou seja, para mulheres e homens)`,

      userFilterSpec: ['local'],
      type: 'bar',
      data: {
        src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRjq4whi-6N0VIdOw_v3GRAM4JDDRwe4YHpm5E6Jtdt9UM29y2pE11zi6btZ9pf1X-S1oi3yTx_nDVf/pub?gid=37489205&single=true&output=csv',
        valueKey: 'Quantidade_horas',
        filter: {
          local: 'Bahia',
          gênero: ['Homens', 'Mulheres'],
        },
        transpose: {
          groupByKeys: ['Ano', 'local'],
          transposeToColumnKey: 'gênero',
        },
      },
      barGroupKey: 'Ano',
      bars: [{ dataKey: 'Mulheres' }, { dataKey: 'Homens' }],
    },

    {
      title: 'Tempo gasto em atividades de cuidado por raça',
      source: 'Elaboração própria, a partir da PNAD-C 2022',
      description: `O gráfico acima apresenta a comparação entre o número de horas gastas por semana entre mulheres brancas e mulheres negras baianas para realizar atividades de cuidado não remunerado. Em média, o tempo dedicado por elas a esse tipo de atividade é bem parecido.

É possível filtrar os dados para o município de Salvador, para a região Nordeste e para o Brasil; e para outros anos. Também é possível filtrar os dados para homens ou o total da população.`,
      userFilterSpec: ['Local'],
      type: 'bar',
      data: {
        src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSpzpV9UZuJ3PssiBGq1vUAYrpU-N3L9MfmBhKoOHcn1dheq8RkCHgs-wBWvhEzsr4UEIJ1yqD7Gd4l/pub?gid=2082105150&single=true&output=csv',
        valueKey: 'media_horas',
        filter: {
          Local: 'Bahia',
          Gênero: ['homens', 'mulheres'],
        },
        transpose: {
          groupByKeys: ['Ano', 'Local'],
          transposeToColumnKey: 'Raça',
        },
      },
      barGroupKey: 'Ano',
      bars: [{ dataKey: 'Branca' }, { dataKey: 'Negra' }],
    },

    {
      title: 'Tempo gasto em atividades de cuidado por idade',
      source: 'Elaboração própria, a partir da PNAD-C 2022',
      description: `O gráfico acima apresenta a comparação entre o número de horas gastas por semana entre mulheres brancas e mulheres negras baianas para realizar atividades de cuidado não remunerado. Em média, o tempo dedicado por elas a esse tipo de atividade é bem parecido.

É possível filtrar os dados para o município de Salvador, para a região Nordeste e para o Brasil; e para outros anos. Também é possível filtrar os dados para homens ou o total da população.`,
      userFilterSpec: ['local', 'Ano'],
      type: 'bar',
      data: {
        src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR1y-MYewpIycJh1ZcT6vqYyBoFjFMc_cX1LUQfpJBJc5NYftxhmtq5y-mMG_AErGCQm559WEb5qTHO/pub?gid=1687049639&single=true&output=csv',
        valueKey: 'media_horas',
        filter: {
          local: 'Bahia',
          Ano: '2022',
          Sexo: ['Homens', 'Mulheres'],
        },
        transpose: {
          groupByKeys: ['local', 'Ano', 'Sexo'],
          transposeToColumnKey: 'Grupo de idade',
        },
      },
      barGroupKey: 'Sexo',
      bars: [
        { dataKey: '14 a 24 anos' },
        { dataKey: '25 a 49 anos' },
        { dataKey: '50 anos ou mais' },
      ],
    },

    {
      title:
        'Tempo gasto em atividades de cuidado por pessoas que trabalham fora de casa',
      source: 'Elaboração própria, a partir da PNAD-C 2022',
      description: `O gráfico acima apresenta a comparação entre o número de horas gastas por semana em 2022  por homens e mulheres que trabalham e não trabalham e que realizam atividades domésticas e de cuidado. Mesmo que tenham empregos fora de casa, as mulheres dedicam mais tempo a atividades de cuidado (não remunerado) do que homens que não trabalham.

Também é possível filtrar os dados para o município de Salvador, para a região Nordeste e para o Brasil. Também é possível visualizar os dados referentes a outros anos.`,
      userFilterSpec: ['local', 'Ano'],
      type: 'bar',
      data: {
        src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRjq4whi-6N0VIdOw_v3GRAM4JDDRwe4YHpm5E6Jtdt9UM29y2pE11zi6btZ9pf1X-S1oi3yTx_nDVf/pub?gid=2078497031&single=true&output=csv',
        valueKey: 'Quantidade_horas',
        filter: {
          local: 'Bahia',
          Ano: '2022',
          gênero: ['Homens', 'Mulheres'],
        },
        transpose: {
          groupByKeys: ['local', 'Ano', 'gênero'],
          transposeToColumnKey: 'Tipo da ocupação',
        },
      },
      barGroupKey: 'gênero',
      bars: [{ dataKey: 'Não ocupadas' }, { dataKey: 'Ocupadas' }],
    },
  ],
}
