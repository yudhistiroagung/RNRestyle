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

const buttonVariant = createVariant<Theme>({ themeKey: 'buttonVariants' });

const ButtonContainer = createRestyleComponent<ButtonContainerProps, Theme>(
  [spacing, buttonVariant as any],
  View,
);

export type ButtonProps = ButtonContainerProps & {
  label: string;
  onPress?: () => void;
  disabled?: boolean;
};

const Button = ({
  label,
  onPress,
  disabled,
  variant,
  ...rest
}: ButtonProps) => {
  const textVariant =
    variant &&
    (`button_${variant}` as keyof Omit<Theme['textVariants'], 'defaults'>);
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <ButtonContainer variant={variant} {...rest}>
        <Text variant={textVariant}>{label}</Text>
      </ButtonContainer>
    </TouchableOpacity>
  );
};

export default Button;
