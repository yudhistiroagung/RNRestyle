import React, { ComponentProps } from 'react';
import { TouchableOpacity } from 'react-native';
import {
  useRestyle,
  spacing,
  backgroundColor,
  SpacingProps,
  VariantProps,
  BackgroundColorProps,
  createVariant,
  composeRestyleFunctions,
  useTheme,
} from '@shopify/restyle';

import Text from './Text';
import Box from './Box';
import { Theme } from '../theme';

type RestyleProps = SpacingProps<Theme> &
  BackgroundColorProps<Theme> &
  VariantProps<Theme, 'buttonVariants'>;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  backgroundColor,
  createVariant({ themeKey: 'buttonVariants' }),
]);

type Props = RestyleProps & {
  label: string;
  onPress?: () => void;
};

const Button = ({ onPress, label, ...rest }: Props) => {
  console.log('REST', rest);
  const props = useRestyle(restyleFunctions, rest as any);
  return (
    <TouchableOpacity onPress={onPress}>
      <Box {...props}>
        <Text>{label}</Text>
      </Box>
    </TouchableOpacity>
  );
};

export type ButtonProps = ComponentProps<typeof Button>;

export default Button;
