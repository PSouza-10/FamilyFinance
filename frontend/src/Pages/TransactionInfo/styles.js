import styled from 'styled-components'

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
  height: auto;
  width: 80%;
  max-width: ${({ theme }) => theme.breakpoints.sm};
  max-height: ${({ theme }) => theme.breakpoints.sm};
  align-self: center;
`
