import styled from 'styled-components'
import { MdBrightnessMedium, MdClose } from 'react-icons/md'
import { IoIosColorPalette } from 'react-icons/io'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;

  width: 100vw;
  height: 30vh;
  flex-direction: column;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 2.5rem;
  p {
    flex-basis: 90%;
    padding-top: 60px;
    font-weight: 600;
  }
`
export const Pallete = styled(IoIosColorPalette)`
  width: 32px;
  height: 32px;
  cursor: pointer;
  align-self: flex-end;
  margin: 10px 10px;
  z-index: 999;
`

export const CloseIcon = styled(MdClose)`
  width: 32px;
  height: 32px;
  cursor: pointer;
  align-self: flex-end;
  margin: 10px 10px;
  z-index: 999;
`

export const ToggleDarkMode = styled(MdBrightnessMedium)`
  width: 64px;
  height: 64px;
  cursor: pointer;
  flex-basis: 100%;
  fill: ${({ theme }) => theme.colors.fg};
`
export const StyleContainer = styled.div`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  position: absolute;

  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.fg};
  width: 80vw;
  height: 50vh;
  top: 25vh;
  border-radius: 0.5em;
  left: 10vw;

  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  z-index: 999;
`
export const Overlay = styled.div`
  position: fixed;

  z-index: 998;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`
export const ColorCircle = styled.span`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: ${({ color }) => color};
  cursor: pointer;
`
