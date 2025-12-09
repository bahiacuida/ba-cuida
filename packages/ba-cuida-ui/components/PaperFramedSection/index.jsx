import styled from 'styled-components'

const Container = styled.section`
  position: relative;
  padding-top: 50px;
  padding-bottom: 50px;
`

const TopImg = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  overflow: hidden;

  > img {
    width: 100%;

    @media (max-width: 600px) {
      width: 200%;
    }
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 65%;
    width: 100%;
    background-color: white;
  }
`
const BottomImg = styled.div`
  position: absolute;
  z-index: 999;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  overflow: hidden;

  > img {
    width: 100%;

    @media (max-width: 600px) {
      width: 200%;
    }
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    bottom: 0;
    width: 100%;
    background-color: white;
  }
`

export function PaperFramedSection({
  style = {},
  children,
  topFrame = true,
  bottomFrame = true,
}) {
  return (
    <Container
      style={{
        backgroundImage: 'url("/assets/paper_framed_section/noise.png")',
        backgroundSize: '100%',
        backgroundRepeat: 'repeat',
        /* Apply a solid color on top */
        backgroundColor: 'var(--marrom)',
        color: 'white',
        backgroundBlendMode: 'hard-light',
        ...style,
      }}
    >
      {topFrame && (
        <TopImg>
          <img src="/assets/paper_framed_section/top_1.png" />
        </TopImg>
      )}
      {children}
      {bottomFrame && (
        <BottomImg>
          <img src="/assets/paper_framed_section/bottom_1.png" />
        </BottomImg>
      )}
    </Container>
  )
}
