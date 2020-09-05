import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  height: 10vh;
  width: 90vw;
  color: ${({ theme }) => theme.colors.fg};
  background-color: ${({ theme }) => theme.colors.bgContrast};
  font-size: 1.8rem;
  font-weight: 450;
  margin: 10px 0;
  cursor: pointer;
  p {
    display: flex;
    justify-content: space-between;
  }

  .value {
    font-weight: 600;
  }
`
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bg};
  justify-content: space-evenly;
`
