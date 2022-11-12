import { createTheme } from '@shopify/restyle';
import light from './light';

const colors = {
  maximumPurle: '#822E81',
  roseDust: '#AA6373',
  greenYellowCrayola: '#F0F2A6',
  melon: '#F0F2A6',
  russianViolet: '#392061',

  black: '#333333',
  white: '#fff',
  white2: '#f5f5f5',

  darkJungleGreen: '#202A25',
} as const;

const theme = createTheme({
  ...light,
  colors: {
    ...light.colors,
    $primary: colors.maximumPurle,
    $secondary: colors.roseDust,
    $accent: colors.greenYellowCrayola,

    $black: colors.black,
    $white: colors.white,

    $whiteLight: colors.white2,

    $background: colors.darkJungleGreen,
    $foreground: colors.white,
  },
  textVariants: {
    ...light.textVariants,
    subHeading: {
      ...light.textVariants.subHeading,
      color: '$whiteLight',
    },
  },
});

export default theme;
