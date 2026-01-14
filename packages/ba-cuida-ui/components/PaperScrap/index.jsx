import { Box } from '@orioro/react-ui-core'

export function PaperScrap({ children, style = {}, ...props }) {
  return (
    <Box
      style={{
        position: 'relative',
        backgroundImage:
          'url("/assets/home/03_capitulo_ana/montagens_ana/Ana_Montagem_03.png")',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        ...style,
      }}
      p="70px"
      {...props}
    >
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          background: '#f9efd9',
          backgroundImage:
            'url("/assets/home/03_capitulo_ana/montagens_ana/Ana_Montagem_03.png")',
          backgroundSize: '150% 150%',
          backgroundPosition: 'center',
        }}
      >
        {children}
      </div>
      {/* <img
        style={{
          position: 'absolute',
          zIndex: 1,
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          // background: 'white',
        }}
        alt=""
        role="presentation"
        src="/assets/home/03_capitulo_ana/montagens_ana/Ana_Montagem_03.png"
      />*/}
      {/*<div
        style={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        {children}
      </div>*/}
    </Box>
  )
}
