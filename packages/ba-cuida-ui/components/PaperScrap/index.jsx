import { Box } from '@orioro/react-ui-core'

export function PaperScrap({ children, style = {}, ...props }) {
  return (
    <Box
      style={{
        position: 'relative',
        ...style,
      }}
      p="7"
      {...props}
    >
      <img
        style={{
          position: 'absolute',
          zIndex: 1,
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        src="/assets/home/03_capitulo_ana/montagens_ana/Ana_Montagem_03.png"
      />
      <div
        style={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        {children}
      </div>
    </Box>
  )
}
