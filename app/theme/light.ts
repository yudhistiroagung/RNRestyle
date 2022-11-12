import { createTheme } from '@shopify/restyle';

const colors = {
  darkSpringGreen: '#2C6E49',
  middleGreen: '#4C956C',
  lightYellow: '#FEFEE3',
  melon: '#FFC9B9',
  persianOrange: '#D68C45',

  black: '#333333',
  white: '#fff',
  gray: '#999999',
  cultured: '#F4F2F3',
} as const;

const theme = createTheme({
  colors: {
    $primary: colors.darkSpringGreen,
    $secondary: colors.middleGreen,
    $accent: colors.melon,

    $black: colors.black,
    $white: colors.white,
    $gray: colors.gray,

    $background: colors.white,

    $foreground: colors.black,
  },
  spacing: {
    xs: 4,
    sm: 8,
    m: 16,
    l: 24,
    xl: 24,
  },
  borderRadii: {
    xs: 4,
    sm: 8,
    m: 16,
    l: 24,
    xl: 24,
  },
  textVariants: {
    defaults: {
      color: '$foreground',
      fontSize: 14,
    },
    heading: {
      color: '$foreground',
      fontSize: 16,
      fontWeight: 'bold',
    },
    subHeading: {
      color: '$gray',
      fontSize: 14,
    },
  },
  breakpoints: {},
  zIndices: {},
});

export type Theme = typeof theme;

export default theme;
