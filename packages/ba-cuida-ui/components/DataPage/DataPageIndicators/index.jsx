import { Flex, Markdown } from '@orioro/react-ui-core'

export function DataPageIndicators() {
  return (
    <Flex direction="column" alignItems="center">
      <Markdown
        style={{
          maxWidth: '500px',
          textAlign: 'center',
        }}
        children={
          'O painel de dados reune indicadores sociais dos cuidados. ' +
          'Cada cartão é interativo: ao clicar, você pode explorar ' +
          'gráficos e dados detalhados sobre cada tema. Os cartões ' +
          'que trazem o símbolo de atenção representam situações mais ' +
          'graves, que exigem ação rápida do poder público.'
        }
      />
      <div>DataPageIndicators</div>
    </Flex>
  )
}
