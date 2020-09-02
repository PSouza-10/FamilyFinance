export const presetColors = {
  green: '#00d47b',
  blue: '#00baed',
  yellow: '#d9bc00',
  orange: '#ff9500',
  red: '#c90000',
  purple: '#8c00ba',
  pink: '#ee83fc'
}

const returnTheme = (darkMode = false, color = 'green') => {
  const lightColors = {
    bg: '#f3f3f3',
    bgContrast: '#ffffff',
    fg: '#1e1e24',
    detail: '#B0ACAB'
  }
  const darkColors = {
    bg: '#222222',
    bgContrast: '#333333',
    fg: '#fafafa',
    detail: '#1e1e24'
  }

  return {
    colors: {
      ...(darkMode ? darkColors : lightColors),
      primary: presetColors[color]
    },
    breakpoints: {
      xs: '0px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    font: {
      xs: '52%',
      sm: '56%',
      md: '60%',
      lg: '70%',
      xl: '80%'
    }
  }
}

export default returnTheme
