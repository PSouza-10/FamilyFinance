import styled from 'styled-components'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { MdDelete, MdEdit } from 'react-icons/md'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  color: ${({ theme }) => theme.colors.fg};
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 60px 8px;
  height: 100vh;
`
export const Value = styled.p`
  text-align: center;
  font-size: 4rem;
  font-weight: bold;
  padding: 10px;
`
export const Description = styled.p`
  text-align: justify;
  font-size: 2.5rem;
  font-weight: 600;
  padding: 10px 5px;
`

export const Header = styled.header`
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
    font-size: 2.5rem;
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

export const DeleteIcon = styled(MdDelete)`
  fill: #fff;
  height: 28px;
  width: 28px;
  cursor: pointer;
  position: absolute;
  top: 9px;
  right: 8px;
`
export const EditIcon = styled(MdEdit)`
  fill: #fff;
  height: 28px;
  width: 28px;
  cursor: pointer;
  position: absolute;
  top: 9px;
  right: 46px;
`

export const Title = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  font-size: 2.8rem;
  font-weight: 700;
  height: 12vh;
`

export const TransactionImage = styled.img`
  height: 52vh;
  width: 80%;
  align-self: center;
`
export const Error = styled.div`
  position: fixed;
  top: 60px;
  right: 5vw;
  left: 5vw;

  border-radius: 0.5em;
  background-color: red;
  color: #fff;
  font-weight: bold;
  padding: 10px 6px;
  font-size: 2.5rem;
  text-align: center;
  width: 90vw;

  display: ${({ show }) => (show ? 'block' : 'none')};
`
