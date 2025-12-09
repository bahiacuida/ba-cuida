export const EMPREGABILIDADE = {
  title: 'Motivos para não procurar trabalho',
  summaryCards: [
    {
      children:
        'em 2024, 196.101 mulheres deixaram de procurar trabalho por terem de cuidar de alguém ou dos afazeres domésticos',
    },
    {
      children:
        'cuidar de alguém ou dos afazeres domésticos é o 2º principal motivo que leva mulheres a deixaram de procurar trabalho (atrás apenas da falta de trabalho no local onde vivem)',
    },
  ],
  details: `O que esse indicador significa?

Esse indicador apresenta os principais motivos que impediram que a população fora da força de trabalho (ou seja, pessoas em idade de trabalhar que não estavam trabalhando e também não estavam procurando por trabalho) buscassem por empregos.

Ele mostra as razões declaradas por essas pessoas para não estarem em busca que emprego. Entre os motivos estão: a falta de trabalho naquela localidade; obrigação de cuidar de alguém ou de afazeres domésticos; por problemas de saúde ou gravidez; falta de experiência profissional ou qualificação etc.`,
  charts: [
    {
      title:
        'Motivos que levaram mulheres e homens desocupados a não procurar por trabalho',
      description:
        'A Imagem mostra um gráfico de barras, em que mais de 196 mil mulheres deixaram de procurar emprego pois tinham que cuidar de alguém ou dos afazeres doméstico, sendo o segundo maior motivo para mulheres não procurarem emprego, perdendo apenas do motivo "Não havia trabalho na localidade".',
      source: 'Elaboração própria, a partir da PNAD-C 2024',

      type: 'bar',
      layout: 'vertical',
      data: {
        src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQdNOXUQ41jvKlauJEsdeY3Ds0odp4UEIBVl-jUl92k8RF47yFt5VCdzHIFppx2xkvDOoHWNva5MLMj/pub?gid=210513281&single=true&output=csv',
        valueKey: 'total',
        filter: {
          gênero: ['Mulheres', 'Homens'],
        },
        transpose: {
          groupByKeys: ['motivo_nao_procurar'],
          transposeToColumnKey: 'gênero',
        },
      },
      barGroupKey: 'motivo_nao_procurar',
      bars: [{ dataKey: 'Mulheres' }, { dataKey: 'Homens' }],
    },
  ],
}
