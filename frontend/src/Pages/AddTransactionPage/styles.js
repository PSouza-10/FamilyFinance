import styled from 'styled-components'
import { IoMdArrowRoundBack } from 'react-icons/io'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  color: ${({ theme }) => theme.colors.fg};
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 10px 8px;
  height: calc(100vh - 35px);
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 50px;
  color: #fff;
  align-items: center;
  justify-content: center;
  padding: 0px 6px;
  position: fixed;
  top: 0;
  width: 100vw;

  p {
    font-size: 2.4rem;
    font-weight: 700;
  }
`

export const ReturnIcon = styled(IoMdArrowRoundBack)`
  fill: #fff;
  height: 36px;
  width: 36px;
  cursor: pointer;
  font-weight: 700;
  position: absolute;
  top: 8px;
  left: 6px;
`

export const Form = styled.div`
  margin: 60px 5px 15px 5px;
`

export const Button = styled.div`
  display: flex;
  justify-content: center;
  color: #fff;
  background: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 7vh;

  &:hover {
    opacity: 0.7;
  }
`
