import { CUIDADO_REMUNERADO, TRABALHO_E_RENDA } from './constants'

export const CONDICOES_TRAB_CUIDADO_REMUNERADO = {
  //
  // Card
  //
  cardTitle: 'Até 1 salário mínimo',
  cardDescription: 'é a renda de 65% das trabalhadoras dos cuidados',
  axis: CUIDADO_REMUNERADO,
  categories: [TRABALHO_E_RENDA],

  //
  // Body
  //
  title:
    'Quais são as condições em que trabalham os trabalhadores dos cuidados?',
  summaryCards: [
    {
      children:
        '73% das trabalhadoras do cuidado não possuem carteira assinada',
    },
    {
      children:
        '84% das trabalhadoras do cuidado não contribuem para a previdência',
    },
  ],
  details: `
O indicador mostra as condições de trabalho das mulheres que atuam em profissões de cuidado, como cuidadoras, babás, empregadas domésticas e profissionais de saúde. Ele avalia se essas trabalhadoras têm direitos garantidos, como carteira assinada, salário justo e acesso à previdência, ajudando a identificar desigualdades e orientar ações para melhorar sua valorização profissional.

### Por quê esse indicador é importante?

Esse indicador é importante porque o trabalho de cuidado é essencial para o bem-estar das famílias e da sociedade, mas muitas vezes é desvalorizado e mal pago. A partir dele, é possível identificar desigualdades de gênero, raça e classe e orientar políticas públicas que melhorem as condições de trabalho e valorizem as mulheres que se dedicam a realizar atividades de cuidado - essenciais para o funcionamento da sociedade.

### O que fazer para melhorar este indicador?

É preciso investir em ações que garantam direitos, valorização e proteção social a essas profissionais. Isso inclui formalizar os vínculos de trabalho, para que todas tenham carteira assinada, férias, 13º salário e acesso à previdência. Também é importante assegurar salários justos e compatíveis com a importância do trabalho de cuidado, além de reduzir as jornadas excessivas e garantir ambientes seguros e saudáveis.

Outra medida essencial é promover a formação e a qualificação profissional, para que as trabalhadoras possam crescer em suas carreiras e serem reconhecidas como profissionais especializadas. Por fim, é fundamental sensibilizar a sociedade e os gestores públicos sobre o valor do cuidado e sobre quem o realiza, incentivando políticas públicas de valorização, fiscalização trabalhista e combate à informalidade e à discriminação.

### Quais perguntas esse indicador ajuda a responder

- As mulheres que trabalham com cuidado têm carteira assinada e acesso à proteção social?
- Elas recebem salários justos e compatíveis com o valor do seu trabalho?
- Como estão as suas jornadas de trabalho — há sobrecarga, múltiplos empregos ou horas extras não remuneradas?
- Essas trabalhadoras têm condições seguras e saudáveis para exercer suas atividades?
- O trabalho de cuidado é reconhecido e valorizado pela sociedade e pelos empregadores?
- Existem diferenças de condições e remuneração entre mulheres brancas e negras nesse tipo de ocupação?
`,

  //
  // Charts
  //
  charts: [
    {
      title: 'Média salarial',
      source:
        'Elaboração própria, a partir da Pesquisa Nacional por Amostra de Domicílios Contínua - último semestre de 2024',
      description: `O gráfico mostra a média de salário recebido por mulheres baianas em profissões consideradas de cuidado.Nele, podemos observar que, em 2024, mais de 70% das mulheres atuando em profissões de cuidado recebiam até 1 salário mínimo.

No gráfico também é filtrar esses dados por gênero e por tipo de profissão (aquelas consideradas como "de cuidado" ou não)
        `,

      userFilterSpec: ['gênero', 'profissão_cuidado'],
      type: 'pie',
      data: {
        src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTi5QQmmyIEIkn9ubMXcFj4t5yrsdHknATFIH428QubQfA6lz9oBJ-QrdE4_k6zt5CoayATZvpQJqoO/pub?gid=1131189240&single=true&output=csv',
        valueKey: 'total',
        labelKey: 'salário',
        filter: {
          gênero: 'Total',
          profissão_cuidado: 'cuidado',
        },
        aggregate: {
          groupByKeys: ['gênero', 'salário'],
        },
      },
    },

    {
      title: 'Carteira assinada',
      source:
        'Elaboração própria, a partir da Pesquisa Nacional por Amostra de Domicílios Contínua - último semestre de 2024',
      description: `O gráfico mostra o número de mulheres profissionais do cuidado da Bahia que possuem carteira assinada ou não. Os dados nos mostram que apenas 26% dessas mulheres possuem vínculo empregatício formalizado.

No gráfico também é filtrar esses dados por gênero e por tipo de profissão (aquelas consideradas como "de cuidado" ou não)`,
      userFilterSpec: ['gênero', 'profissão_cuidado'],
      type: 'pie',
      data: {
        src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRkv_KxlTZ3IpdxmKvB3LljbYhdKVnv_RdGgC8HcSC_DZoXmgFVHzD32FqqKc8YSNWmd_SGDZRcjWYG/pub?gid=659617838&single=true&output=csv',
        valueKey: 'total',
        labelKey: 'carteira_assinada',
        filter: {
          gênero: 'Total',
          profissão_cuidado: 'cuidado',
        },
        aggregate: {
          groupByKeys: ['gênero', 'carteira_assinada'],
        },
      },
    },

    {
      title: 'Contribuição para previdência',
      source:
        'Elaboração própria, a partir da Pesquisa Nacional por Amostra de Domicílios Contínua - último semestre de 2024',
      description: `O gráfico mostra o número de mulheres profissionais do cuidado da Bahia que contribuem para a previdência ou não. Os dados nos mostram que apenas 15% dessas mulheres são contribuintes.

No gráfico também é filtrar esses dados por gênero e por tipo de profissão (aquelas consideradas como "de cuidado" ou não)`,
      userFilterSpec: ['gênero', 'profissão_cuidado'],
      type: 'pie',
      data: {
        src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSHVhtLfhSbaKqTjZr4eoHT3wTLNjZNhiRADL090ceGp6dlUdU_B4TKh7DQU5EsePz7eDiFW1qcxQez/pub?gid=1545662835&single=true&output=csv',
        valueKey: 'total',
        labelKey: 'contribuição_previdência',
        filter: {
          gênero: 'Total',
          profissão_cuidado: 'cuidado',
        },
        aggregate: {
          groupByKeys: ['gênero', 'contribuição_previdência'],
        },
      },
    },

//     {
//       title: 'Quantidade de horas trabalhadas',
//       source:
//         'Elaboração própria, a partir da Pesquisa Nacional por Amostra de Domicílios Contínua - último semestre de 2024',
//       description: `O gráfico mostra a quantidade de horas trabalhadas por mulheres profissionais do cuidado da Bahia. 20% dessas profissionais possuem jornadas de trabalho de mais de 40 horas semanais.

// No gráfico também é filtrar esses dados por gênero e por tipo de profissão (aquelas consideradas como "de cuidado" ou não)`,
//       userFilterSpec: ['gênero', 'profissão_cuidado'],
//       type: 'pie',
//       data: {
//         src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSl_oGstPdHfF9GpGxxS9dv-5GFTwAtikN-4WhnUrrKAQFjJZvMRdBXqR8LoCHIhDdZF8OaAJugjlw6/pub?gid=1952547463&single=true&output=csv',
//         valueKey: 'total',
//         labelKey: 'horas_ trabalhadas',
//         filter: {
//           gênero: 'Total',
//           profissão_cuidado: 'cuidado',
//         },
//         aggregate: {
//           groupByKeys: ['gênero', 'horas_ trabalhadas'],
//         },
//       },
//     },
  ],
}
