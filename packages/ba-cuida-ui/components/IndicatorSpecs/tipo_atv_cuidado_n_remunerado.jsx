export const TIPO_ATV_CUIDADO_N_REMUNERADO = {
  //
  // Body
  //
  title: 'Quem realiza cada tipo de atividade de cuidado não remunerado?',
  summaryCards: [
    {
      children:
        'mulheres são a maioria entre aquelas que realizam todos os tipos de atividades de cuidado não remunerado',
    },
  ],
  details: `O indicador “Tipos de atividades de cuidado não remunerado e quem as realiza” mostra quais tarefas de cuidado são feitas sem pagamento — como cozinhar, limpar, cuidar de crianças, de pessoas idosas ou doentes — e quem são as pessoas responsáveis por essas atividades.

### Por quê esse indicador é importante?

Ele ajuda a entender como o trabalho de cuidado é distribuído entre homens e mulheres, e entre diferentes grupos sociais, revelando desigualdades na divisão do tempo e das responsabilidades dentro das famílias e da sociedade.

### O que fazer para melhorar este indicador?

Para melhorar esse indicador, é preciso promover uma divisão mais equilibrada das tarefas de cuidado entre homens e mulheres e reconhecer o valor social e econômico desse trabalho. Isso pode ser feito por meio de políticas públicas que ampliem o acesso a creches, escolas em tempo integral e serviços de cuidado a idosos e pessoas com deficiência, além de campanhas educativas que incentivem a participação dos homens nas tarefas domésticas e de cuidado. Também é importante valorizar o tempo dedicado ao cuidado e criar condições de trabalho mais flexíveis que permitam equilibrar responsabilidades familiares e profissionais.

### Quais perguntas esse indicador ajuda a responder

- Quais são as principais atividades de cuidado não remunerado realizadas nas famílias?
- Quem realiza cada tipo de atividade`,

  //
  // Charts
  //
  charts: [
    {
      title: 'Atividades domésticas de cuidado não remunerado',
      source: 'Elaboração própria, a partir da PNAD-C 2022',
      description: `No gráfico acima, podemos visualizar as informações da % de homens e mulheres que realizam cada tipo de atividade doméstica considerada como um tipo de trabalho de cuidado não remunerado. As mulheres são a maioria entre aquelas que realizam quase todas essas tarefas, sendo a única exeção a realização de pequenos reparos de manuntenção.

Também é possível filtrar os dados para o município de Salvador, para a região Nordeste e para o Brasil. Também é possível visualizar os dados referentes a outros anos.`,
      userFilterSpec: ['Local', 'Ano'],
      type: 'bar',
      layout: 'vertical',
      data: {
        src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT64-428iqDeda4LXHKyZvp3HzPdoogCJI8zztd6WjWIpz00HMhTJ3JCHqc419lQowmqhexWOhnB9B6/pub?gid=1787549607&single=true&output=csv',
        valueKey: '%_pessoas',
        filter: {
          Local: 'Bahia',
          Ano: '2022',
          Gênero: ['Homens', 'Mulheres'],
        },
        transpose: {
          groupByKeys: ['Local', 'Tipo atividade', 'Ano'],
          transposeToColumnKey: 'Gênero',
        },
      },
      barGroupKey: 'Tipo atividade',
      bars: [
        { dataKey: 'Mulheres', stackId: 'a' },
        { dataKey: 'Homens', stackId: 'a' },
      ],
      xAxis: {
        domain: [0, 100],
      },
    },

    {
      title: 'Outras atividades de cuidado não remunerado',
      source: 'Elaboração própria, a partir da PNAD-C 2022',
      description: `No gráfico acima, podemos visualizar as informações da % de homens e mulheres que realizam cada tipo de atividade de trabalho de cuidado não remunerado. As mulheres são a maioria entre aquelas que realizam todas essas tarefas.

Também é possível filtrar os dados para o município de Salvador, para a região Nordeste e para o Brasil. Também é possível visualizar os dados referentes a outros anos.`,
      userFilterSpec: ['Local', 'Ano'],
      type: 'bar',
      layout: 'vertical',
      data: {
        src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQubsO9Y8_hH5C4_cw9i0Uy1H8kCDm25wqydB0euErB5gjDA2kV0cHfocn3ECppgfE21ssXZmqInPgY/pub?gid=1608397417&single=true&output=csv',
        valueKey: '%_pessoas',
        filter: {
          Local: 'Bahia',
          Ano: '2022',
          Sexo: ['Homens', 'Mulheres'],
        },
        transpose: {
          groupByKeys: ['Local', 'Tipo de cuidado', 'Ano'],
          transposeToColumnKey: 'Sexo',
        },
      },
      barGroupKey: 'Tipo de cuidado',
      bars: [
        { dataKey: 'Mulheres', stackId: 'a' },
        { dataKey: 'Homens', stackId: 'a' },
      ],
      xAxis: {
        domain: [0, 100],
      },
    },
  ],
}
