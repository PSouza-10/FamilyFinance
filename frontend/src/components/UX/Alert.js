import styled from 'styled-components'
import { presetColors } from '../../Theme'

const Alert = styled.div`
  position: fixed;
  top: 60px;
  right: 5vw;
  left: 5vw;

  border-radius: 0.5em;
  background-color: ${({ color, theme }) =>
    presetColors[color] || theme.colors.primary};
  color: #fff;
  font-weight: bold;
  padding: 10px 6px;
  font-size: 2.5rem;
  text-align: center;
  width: 90vw;

  display: ${({ show }) => (show ? 'block' : 'none')};
`

export default Alert
