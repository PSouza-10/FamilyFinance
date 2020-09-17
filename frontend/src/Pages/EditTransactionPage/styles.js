import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  color: ${({ theme }) => theme.colors.fg};
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 60px 8px;

  height: calc(140vh - 50px);
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
