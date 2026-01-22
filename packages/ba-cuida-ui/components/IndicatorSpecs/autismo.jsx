export const AUTISMO = {
  //
  // Body
  //
  title: 'Quem são as pessoas com deficiência na Bahia?',
  details: `O indicador de pessoas com autismo apresenta a quantidade de indivíduos que declararam possuir Transtorno do Espectro Autista (TEA) e suas principais características sociodemográficas. Ele mostra como essa população está distribuída por gênero, idade, raça/cor e território, oferecendo um retrato inicial da presença do TEA no Estado da Bahia.

### Por quê esse indicador é importante?

Esse indicador é importante porque permite compreender o tamanho e o perfil da população com Transtorno do Espectro Autista (TEA) na Bahia, oferecendo subsídios essenciais para planejar políticas e serviços de cuidado.O indicador ajuda a dimensionar a demanda por apoio especializado, atendimento educacional adequado, serviços de saúde e estratégias de inclusão social. Ele também é fundamental para orientar a alocação de recursos, reduzir desigualdades de acesso e garantir que crianças, adolescentes e adultos com autismo — reconhecidos como grupo prioritário pela Política Nacional do Cuidado — recebam atenção conforme suas necessidades específicas.

### O que fazer para melhorar este indicador?

Para melhorar esse indicador, é fundamental qualificar e ampliar a coleta de informações sobre o Transtorno do Espectro Autista (TEA). Também é importante reduzir a subnotificação, fortalecendo campanhas de informação para que famílias e indivíduos compreendam melhor o que caracteriza o TEA e se sintam seguros para declarar a condição. Outro passo essencial é detalhar recortes como idade, gênero, raça/cor, território e nível de funcionalidade, permitindo análises mais precisas sobre desigualdades e necessidades específicas.`,

  //
  // Charts
  //
  charts: [
    {
      title: 'total de pessoas com deficiência diagnosticadas com autismo',
      source: 'Elaboração própria, a partir dos dados do Censo 2022',
      description: `O gráfico nos mostra o número de pessoas com deficiência na Bahia que são diagnosticadas com autismo.

É possível filtrar os dados e ver os número para cada município.`,
      userFilterSpec: ['local'],
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

    {
      title: 'pessoas diagnosticadas com autismo por gênero',
      source: 'Elaboração própria, a partir dos dados do Censo 2022',
      description: `O gráfico nos mostra o número de pessoas diagnosticadas com autismo na Bahia por gênero. Podemos observar que, em sua maioria, são homens.

Também é possível filtrar os dados e ver os número para cada município.`,
      userFilterSpec: ['local'],
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

    {
      title: 'pessoas diagnosticadas com autismo por raça',
      source: 'Elaboração própria, a partir dos dados do Censo 2022',
      description: `O gráfico mostra o número de pessoas inseridas no mercado de trabalho e fora dele, e compara esses valores entre as populações com e sem deficiência.  taxa de analfabetismo entre a população com e sem deficiência no estado da Bahia. É possível observar que a proporção de pessoas analfabetas é 3x maior entre aquelas que possuem alguma deficiência.

É possível filtrar os dados e ver os número por gênero`,
      userFilterSpec: ['local'],
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

    {
      yAxis: {
        width: 150,
      },
      style: { minHeight: 600 },
      title: 'pessoas diagnosticadas com autismo por grupo de idade',
      source: 'Elaboração própria, a partir dos dados do Censo 2022',
      description: `O gráfico nos mostra o número de pessoas diagnosticadas com autismo na Bahia por gênero. Podemos observar que, em sua maioria, são homens.

Também é possível filtrar os dados e ver os número para cada município.`,
      userFilterSpec: ['local', 'gênero'],
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
      bars: [{ dataKey: 'total' }],
    },
  ],
}
