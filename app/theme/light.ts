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
    $warning: colors.melon,
    $danger: colors.persianOrange,

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
  buttonVariants: {
    defaults: {
      borderRadius: 'sm',
      padding: 'sm',
      borderWidth: 1,
      borderColor: '$foreground',
      alignItems: 'center',
    },
    primary: {
      borderRadius: 'sm',
      padding: 'sm',
      backgroundColor: '$primary',
      alignItems: 'center',
      borderWidth: undefined,
    },
    warning: {
      borderRadius: 'sm',
      padding: 'sm',
      backgroundColor: '$warning',
      alignItems: 'center',
      borderWidth: undefined,
    },
    danger: {
      borderRadius: 'sm',
      padding: 'sm',
      backgroundColor: '$danger',
      alignItems: 'center',
      borderWidth: undefined,
    },
  },
  cardVariants: {
    defaults: {
      borderRadius: 'sm',
      padding: 'sm',
      backgroundColor: '$background',
      elevation: 4,
    },
    primary: {
      borderRadius: 'sm',
      padding: 'sm',
      backgroundColor: '$primary',
      elevation: 4,
    },
  },
  breakpoints: {},
  zIndices: {},
});

export type Theme = typeof theme;

export default theme;
