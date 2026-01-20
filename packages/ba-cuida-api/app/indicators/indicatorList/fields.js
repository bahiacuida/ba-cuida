import { json, multiselect, select, text } from '@keystone-6/core/fields'

export function indicatorListFields() {
  return {
    //
    // Indicator details
    //
    title: text(),
    slug: text({
      isIndexed: 'unique',
      db: {
        isNullable: false,
      },
    }),
    summaryCards: json({
      defaultValue: [],
    }),
    details: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    charts: json({
      defaultValue: [],
    }),

    //
    // Card details
    //
    cardTitle: text(),
    cardDescription: text(),
    axis: select({
      options: [
        'populacao_prioritaria',
        'cuidado_remunerado',
        'cuidado_nao_remunerado',
      ],
    }),
    categories: multiselect({
      options: ['Trabalho e renda', 'Perfil populacional', 'Educação'],
    }),
  }
}
