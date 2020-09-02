import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 10px;
  align-items: stretch;
  height: 100px;
  justify-content: space-evenly;
`

export const StyledField = styled.input`
  padding: 4px 6px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.detail};
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.detail};
  border-radius: 0.4em;
  font-size: 2rem;
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.bgContrast};
    color: ${({ theme }) => theme.colors.fg};
    outline: none;
    box-shadow: none;
  }
`

export const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 2.5rem;
`
