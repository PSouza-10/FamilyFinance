import { Link } from 'react-router-dom'
import styled from 'styled-components'
export const Container = styled(Link)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border-radius: 12em;
  height: 48px;
  width: 48px;
  font-size: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 15px;
  right: 8px;
`
