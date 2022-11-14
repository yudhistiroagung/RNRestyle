import React, { ComponentProps } from 'react';
import { TouchableOpacity, View } from 'react-native';
import {
  createRestyleComponent,
  createVariant,
  SpacingProps,
  VariantProps,
  spacing,
} from '@shopify/restyle';

import { Theme } from '../theme';
import Text from './Text';

type ButtonContainerProps = SpacingProps<Theme> &
  VariantProps<Theme, 'buttonVariants'> &
  ComponentProps<typeof View>;

const cardVariant = createVariant<Theme>({ themeKey: 'buttonVariants' });

const ButtonContainer = createRestyleComponent<ButtonContainerProps, Theme>(
  [spacing, cardVariant as any],
  View,
);

export type ButtonProps = ButtonContainerProps & {
  label: string;
  onPress?: () => void;
};

const Button = ({ label, onPress, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ButtonContainer {...rest}>
        <Text>{label}</Text>
      </ButtonContainer>
    </TouchableOpacity>
  );
};

export default Button;
