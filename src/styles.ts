import { DefaultTheme } from '@react-navigation/native'

const colors = {
  primary: '#ca3a4d',
  secondary: '#09090d',
  tertiary: '#14141c',
  disabled: '#0a0a0e',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#D3D3D3',
  darkGray: '#7e7e7e',
  pink: '#f91880',
  orange: '#ff8c19',
}

const theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.secondary,
    card: colors.tertiary,
    text: colors.white,
    icon: colors.white,
    border: colors.black,
    notification: colors.black,
  },
}

export { theme, colors }
