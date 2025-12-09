export const PERFIL_TRAB_CUIDADO_N_REMUNERADO = {
  //
  // Body
  //
  title: 'Quem são as cuidadoras invisíveis (não-remuneradas) da Bahia?',
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

- Quem são as pessoas que mais se dedicam ao cuidado sem receber por isso — mulheres ou homens?
- Qual a raça das pessoas que mais se dedicam a esse tipo de atividade?
- Qual a faixa etária de mulheres que mais realizam atividades de cuidado não remuneradas?
`,

  //
  // Charts
  //
  charts: [
    {
      title: 'Gênero de quem realiza atividades de cuidado não-remunerado',
      source: 'Elaboração própria, a partir da PNAD-C 2022',
      description: `O gráfico acima apresenta a comparação entre o número de mulheres e homens que realizaram atividades de cuidado não remunerado na Bahia no ano de 2022. Podemos observar que as mulheres são a maioria entre eles.

Também é possível filtrar os dados para o município de Salvador, para a região Nordeste e para o Brasil, além de visualizar os dados de outros anos.`,
      userFilterSpec: ['Local', 'Ano'],
      type: 'pie',
      data: {
        src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSAmA3v9BcmtxbuWKJH7Vk2B-F_D5hOXkHGxuG9QJKY3nyjVfeYqDulF0E3EOnVU9ZiKafPVfUDDs_A/pub?gid=1796597373&single=true&output=csv',
        valueKey: 'cuidado_n_pessoas',
        labelKey: 'Genero',
        filter: {
          Local: 'Bahia',
          Ano: '2022',
        },
        // aggregate: {
        //   groupByKeys: ['Local', 'Ano', 'Genero'],
        // },
      },
    },

    {
      title: 'Raça de quem realiza atividades de cuidado não-remunerado',
      description: `O gráfico acima apresenta os números de mulheres que realizam atividades de cuidado não remunerado na Bahia por raça. Mais de 80% das mulheres que realizam essas atividades são negras.

Também é possível filtrar os dados por gênero, para o município de Salvador, para a região Nordeste e para o Brasil, além de visualizar os dados de outros anos.`,
      userFilterSpec: ['local', 'Ano', 'Sexo'],
      type: 'pie',
      data: {
        src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS3JrK7gSyyvweSqhRt0p6zL5eLTsYSxN4BdlUqSqKqzeLN-nLXdE8iPUYFlfEfrvJQ_Dtw3h_h9w5t/pub?gid=1590975180&single=true&output=csv',
        valueKey: 'Total',
        labelKey: 'Cor ou raça',
        filter: {
          local: 'Bahia',
          Ano: '2022',
          Sexo: 'Total',
        },
        // aggregate: {
        //   groupByKeys: ['Local', 'Ano', 'Genero'],
        // },
      },
    },

    {
      title: 'Idade de quem realiza atividades de cuidado não remunerado',
      description: `O gráfico acima apresenta o número de mulheres que realizam atividades de cuidado não remunerado em cada faixa etária. As mulheres com idades entre 25 e 49 anos estão entre aquelas que mais realizam esse tipo de atividade.

Também é possível filtrar os dados para o município de Salvador, para a região Nordeste e para o Brasil. Também é possível visualizar os dados para homens e total.`,
      userFilterSpec: ['local', 'Sexo'],
      type: 'bar',
      data: {
        src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTnQvCjdL4H1FMVlsZfugDfrIgSjIxU9cg1Dt53GfurcSJVerjrVmH7UUlX-S_SqJ6F2XLrdgaOnIeJ/pub?gid=1687049639&single=true&output=csv',
        valueKey: 'n_pessoas',
        filter: {
          local: 'Bahia',
          Sexo: 'Total',
        },
        transpose: {
          groupByKeys: ['local', 'Ano', 'Sexo'],
          transposeToColumnKey: 'Grupo de idade',
        },
      },
      barGroupKey: 'Ano',
      bars: [
        { dataKey: '14 a 24 anos' },
        { dataKey: '25 a 49 anos' },
        { dataKey: '50 anos ou mais' },
      ],
    },
  ],
}
