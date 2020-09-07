import styled from 'styled-components'

export const Form = styled.form``

export const Button = styled.button`
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
