import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  height: 10vh;
  width: 80vw;
  color: ${({ theme }) => theme.colors.fg};
  background-color: ${({ theme }) => theme.colors.bgContrast};
  font-size: 1.6rem;
  font-weight: 450;
  margin: 10px 0px;
  p {
    display: flex;
    justify-content: space-between;
  }
`
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bg};
  justify-content: space-evenly;
`
