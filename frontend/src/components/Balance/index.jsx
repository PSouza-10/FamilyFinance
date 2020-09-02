import React, { useState } from 'react'
import { presetColors } from '../../Theme'
import {
  Container,
  ToggleDarkMode,
  Pallete,
  CloseIcon,
  ColorCircle,
  StyleContainer,
  Overlay
} from './styles'

function Balance({ spent, theme, setTheme }) {
  const [styleWindow, setStyleWindow] = useState(false)

  const setPrimaryColor = color => {
    setTheme({
      ...theme,
      color
    })
  }

  const handleStyleWindow = () => {
    document.body.style.overflow = styleWindow ? 'initial' : 'hidden'

    setStyleWindow(!styleWindow)
  }

  const Colors = () => (
    <StyleContainer open={styleWindow}>
      <ToggleDarkMode
        onClick={() =>
          setTheme({
            ...theme,
            mode: !theme.mode
          })
        }
      />
      {Object.keys(presetColors).map(key => (
        <ColorCircle
          color={presetColors[key]}
          key={key}
          onClick={() => setPrimaryColor(key)}
        />
      ))}
    </StyleContainer>
  )

  return (
    <Container>
      {styleWindow && <Overlay />}
      <Colors />
      {styleWindow ? (
        <CloseIcon onClick={handleStyleWindow} />
      ) : (
        <Pallete onClick={handleStyleWindow} />
      )}
      <p>Você gastou {spent} nesse mês.</p>
    </Container>
  )
}

export default Balance
