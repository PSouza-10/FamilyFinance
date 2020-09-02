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

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 2rem;
    font-weight: 700;
    padding: 3px 10px;
  }
`

export const Description = styled.p``

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 45px;
  color: #fff;
  align-items: center;
  justify-content: center;
  padding: 0px 6px;

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
  top: 6px;
  left: 6px;
`
