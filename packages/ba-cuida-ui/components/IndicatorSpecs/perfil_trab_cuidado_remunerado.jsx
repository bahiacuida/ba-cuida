import {
  CUIDADO_REMUNERADO,
  PERFIL_POPULACIONAL,
  TRABALHO_E_RENDA,
} from './constants'

export const PERFIL_TRAB_CUIDADO_REMUNERADO = {
  //
  // Card
  //
  cardTitle: '58% de mulheres negras',
  cardDescription:
    'é o perfil das pessoas que executam os trabalhos remunerados dos cuidados',
  axis: CUIDADO_REMUNERADO,
  categories: [TRABALHO_E_RENDA, PERFIL_POPULACIONAL],

  //
  // Body
  //
  title: 'Quem são os cuidadores remunerados da Bahia?',
  summaryCards: [
    {
      children:
        '1.019.774 pessoas trabalham em profissões de cuidado na Bahia (cerca de 16%)',
    },
    {
      children:
        '85% das mulheres que trabalham em profissões de cuidado são negras',
    },
  ],
  details: `
O trabalho de cuidado remunerado é aquele realizado por profissionais que recebem pagamento para cuidar de outras pessoas, como babás, auxiliares de creches, cuidadoras e cuidadores de pacientes e pessoas idosas, diaristas, entre outras.

Esse indicador, portanto, nos mostra a quantidade e o perfil das pessoas que realizam esse tipo de trabalho na Bahia, incluindo seu gênero, raça, idade e nível de escolaridade.

### Por quê esse indicador é importante?

Esse indicador é importante porque torna visível o perfil das pessoas que sustentam, de forma remunerada, uma parte essencial da sociedade: o cuidado. Ele permite identificar quem são esses trabalhadores, em sua maioria mulheres e frequentemente em condições de maior vulnerabilidade social, e compreender as desigualdades de gênero, raça e renda presentes nesse setor. A partir desses dados, é possível formular políticas públicas que valorizem o trabalho de cuidado, promovam melhores condições de emprego e assegurem direitos trabalhistas a quem desempenha essas funções.

### Quais são as profissões consideradas como "de cuidados"?

Para definir as profissões a serem consideradas como de cuidado remunerado, nos embasamos no trabalho de Guimarães e Pinheiro (2023), em que as autoras identificam mais de 70 ocupações listadas na Classificação Nacional de Ocupações para Pesquisas Domiciliares (COD) ligadas ao cuidado, com base em uma tipologia que considera 3 dimensões: 1) o contexto em que as relações de trabalho ocorrem (no ambiente doméstico ou não); 2) o tipo de interação existente entre trabalhador e beneficiário do cuidado (direta ou indireta); e 3) a necessidade de continuidade nesse cuidado (de forma recorrente ou não recorrente).

*Dadas as limitações de pesquisa deste Observatório, incluímos em nossas análises as ocupações ligadas ao cuidado incluídas em ambas dimensões de contexto; com interação direta e indireta; de forma recorrente e dependente. Dessa forma, consideramos aqui como profissões de cuidado remunerado: 1) profissionais de enfermagem; 2) professores do ensino pré-escolar; 3) educadores para necessidades especiais; 4) profissionais de nível médio de enfermagem; 5) chefes de cozinha; 6) cozinheiros; 7) governantas e mordomos domésticos; 8) acompanhantes e criados particulares; 9) cuidadores de crianças; 10) ajudantes de professores; 11) trabalhadores de cuidados pessoais em instituições; 12) trabalhadores de cuidados pessoais a domicílios; 13) trabalhadores de cuidados pessoais nos serviços de saúde não classificados; 14) guardas de segurança; 15) agricultores e trabalhadores qualificados no cultivo de hortas, viveiros e jardins; 16) condutores de automóveis, taxis e caminhonetes; 17) trabalhadores dos serviços domésticos em geral; 18) outros trabalhadores de limpeza; 19) trabalhadores elementares da jardinagem e horticultura; e 20) ajudantes de cozinha.

### Fontes:
Elaboração própria, a partir da PNAD-C 2022

https://cuidado.cebrap.org.br/wp-content/uploads/2023/11/WhoCares_DT02.pdf

https://ftp.ibge.gov.br/Censos/Censo_Demografico_2010/metodologia/anexos/anexo_7_ocupacao_cod.pdf
    `,

  //
  // Charts
  //
  charts: [
    {
      title: 'Quantas pessoas trabalham no "setor dos cuidados" na Bahia?',
      source: 'Elaboração própria, a partir da PNAD-C 2024',
      description:
        'O gráfico mostra como os trabalhadores da Bahia estavam distribuídos em 2024 entre profissões de cuidado e outras áreas. Naquele ano, mais de 1 milhão de pessoas — cerca de 16% de todos os trabalhadores do estado — tinham ocupações ligadas ao cuidado.',

      userFilterSpec: ['genero'],
      type: 'pie',
      data: {
        src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTxSCRbFCJKfp-FRnzptjVDAI8-Y-4_VFFOFteQiSCJa2HnL8L7A3A7MhUSSJOrpaVGYxpmm4ZrElZ4/pub?output=csv',
        valueKey: 'total',
        labelKey: 'ocup_cuidado',
        filter: {
          genero: 'Total',
        },
        aggregate: {
          groupByKeys: ['genero', 'ocup_cuidado'],
        },
      },
    },

    {
      title: 'Qual o gênero de quem trabalha no setor dos cuidados na Bahia?',
      source: 'Elaboração própria, a partir da PNAD-C 2024',
      description:
        'Os gráficos mostram quantos homens e mulheres trabalhavam na Bahia em 2024. No gráfico da esquerda, vemos a divisão por gênero em todas as profissões. Já no gráfico da direita, aparecem apenas as profissões de cuidado. Enquanto as mulheres eram 43% do total de trabalhadores no estado, essa participação cresce para 68% quando olhamos só para as ocupações de cuidado, mostrando que esse tipo de trabalho é feito principalmente por mulheres.',
      userFilterSpec: ['ocup_cuidado'],
      type: 'pie',
      data: {
        src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTxSCRbFCJKfp-FRnzptjVDAI8-Y-4_VFFOFteQiSCJa2HnL8L7A3A7MhUSSJOrpaVGYxpmm4ZrElZ4/pub?output=csv',
        valueKey: 'total',
        labelKey: 'genero',
        filter: {
          ocup_cuidado: 'cuidado',
          genero: ['Mulher', 'Homem'],
        },
        aggregate: {
          groupByKeys: ['genero'],
        },
      },
    },

    {
      title: 'Qual a raça de quem trabalha nos cuidados?',
      source: 'Elaboração própria, a partir da PNAD-C 2024',
      description: `
O gráfico mostra a distribuição dos trabalhadores e trabalhadoras do cuidado na Bahia por raça. É possível filtrar os dados por gênero, o que permite observar, por exemplo, qual a porcentagem de mulheres negras nessas profissões na Bahia (84%).

Também há a opção de comparar a distribuição por raça no conjunto do mercado de trabalho baiano e em outras ocupações fora da área do cuidado.
        `,
      userFilterSpec: ['profissão_cuidado', 'gênero'],
      type: 'pie',
      data: {
        src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSSstGjcU0zHqMBFhdZ1VOrnQHDeDEMouXkkP9IHTn3RpfjXmVj0hh3NXDIJAO1LeVfah3kI9H8TaSL/pub?gid=9336838&single=true&output=csv',
        valueKey: 'total',
        labelKey: 'raça',
        filter: {
          profissão_cuidado: 'cuidado',
          gênero: 'Total',
        },
        aggregate: {
          groupByKeys: ['raça'],
        },
      },
    },

    {
      title: 'Qual a idade de quem trabalha nos cuidados?',
      source: 'Elaboração própria, a partir da PNAD-C 2024',
      description: `
O gráfico mostra a distribuição dos trabalhadores e trabalhadoras do cuidado na Bahia por idade. É possível filtrar os dados por gênero, o que permite observar, por exemplo, que a maior parte das mulheres que trabalham em profissões de cuidado na Bahia tem entre 30 e 49 anos.

Também há a opção de comparar a distribuição por idade no conjunto do mercado de trabalho baiano e em outras ocupações fora da área do cuidado.`,
      userFilterSpec: ['gênero', 'profissão_cuidado'],
      type: 'pie',
      data: {
        src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQrR8cTsbLzGnx7Ro1yiDmYDjDHKXUBJfSUl519SAswof1ZVPd7JGiGmsgyU_ASGnn8ITKripGXJcrp/pub?gid=2128398894&single=true&output=csv',
        valueKey: 'total',
        labelKey: 'idade',
        filter: {
          profissão_cuidado: 'cuidado',
          gênero: 'Mulheres',
        },
        aggregate: {
          groupByKeys: ['idade'],
        },
      },
    },

    {
      title: 'Qual o nível de escolaridade de quem trabalha nos cuidados?',
      source: 'Elaboração própria, a partir da PNAD-C 2024',
      description: `O gráfico mostra a distribuição dos trabalhadores e trabalhadoras do cuidado na Bahia por nível de escolaridade. É possível filtrar os dados por gênero, o que permite observar, por exemplo, que a maior parte das mulheres que trabalham em profissões de cuidado na Bahia tem o Ensino Médio completo.

Também há a opção de comparar a distribuição por nível de instrução no conjunto do mercado de trabalho baiano e em outras ocupações fora da área do cuidado.

### Quais perguntas esse indicador ajuda a responder

- Quem são as cuidadoras remuneradas dos cuidados na Bahia?
- Qual a raça das profissionais do cuidado?
- Qual o nível de escolaridade médio dos trabalhadores e trabalhadoras do setor dos cuidados na Bahia?`,
      type: 'pie',
      userFilterSpec: ['gênero', 'profissão_cuidado'],
      data: {
        src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTT2fmyoy69EupGYhVY7QHFZWHY-gHd7xgC_6dZVxcvRiTcQVfPEk6TkgQdCE7NMS_af-ppYPZzUBsi/pub?gid=68453628&single=true&output=csv',
        valueKey: 'total',
        labelKey: 'escolaridade',
        filter: {
          profissão_cuidado: 'cuidado',
          gênero: 'Total',
        },
        aggregate: {
          groupByKeys: ['gênero', 'escolaridade'],
        },
      },
    },
  ],
}
