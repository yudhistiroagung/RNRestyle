import { createTheme } from '@shopify/restyle';

const colors = {
  darkSpringGreen: '#2C6E49',
  middleGreen: '#4C956C',
  lightYellow: '#FEFEE3',
  melon: '#FFC9B9',
  persianOrange: '#D68C45',
  redOrange: '#FF3F00',
  jonquil: '#F7CB15',

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

    $warning: colors.jonquil,
    $danger: colors.redOrange,

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
    xl: 32,
  },
  borderRadii: {
    xs: 4,
    sm: 8,
    m: 16,
    l: 24,
    xl: 32,
  },
  textVariants: {
    defaults: {
      color: '$foreground',
      fontSize: 14,
    },
    heading: {
      color: '$foreground',
      fontSize: 20,
      fontWeight: 'bold',
    },
    subHeading: {
      color: '$gray',
      fontSize: 16,
    },
    title: {
      color: '$foreground',
      fontSize: 16,
      fontWeight: 'bold',
    },
    subTitle: {
      color: '$gray',
      fontSize: 14,
    },

    // button label text varianst
    button_defaults: {
      color: '$foreground',
    },
    button_primary: {
      color: '$white',
    },
    button_warning: {
      color: '$white',
    },
    button_danger: {
      color: '$white',
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
      elevation: 6,
    },
  },
  breakpoints: {},
  zIndices: {},
});

export type Theme = typeof theme;

export default theme;
