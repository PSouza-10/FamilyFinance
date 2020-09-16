import styled from 'styled-components'

const FormButton = styled.button`
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
  border: none;

  &:active {
    filter: brightness(130%);
  }
`

export default FormButton
