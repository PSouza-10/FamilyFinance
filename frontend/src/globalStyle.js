import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    body:root {
        height: 100%;
        max-width: 100%;
       font-size: 2rem;
       background-color: ${({ theme }) => theme.colors.bg};
       
    }
   
    ${({ theme }) =>
      Object.keys(theme.breakpoints).map(
        breakpoint => `
            @media(min-width: ${theme.breakpoints[breakpoint]}){
                html{
                    font-size: ${theme.font[breakpoint]};
                }
            }
        `
      )}

    a{
        text-decoration: none;
        color: inherit;
    }
`
