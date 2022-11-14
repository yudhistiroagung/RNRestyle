import { ComponentProps } from 'react';
import { View } from 'react-native';
import {
  createRestyleComponent,
  createVariant,
  spacing,
  SpacingProps,
  VariantProps,
} from '@shopify/restyle';

import { Theme } from '../theme';

type Props = SpacingProps<Theme> &
  VariantProps<Theme, 'cardVariants'> &
  ComponentProps<typeof View>;

const cardVariant = createVariant<Theme>({ themeKey: 'cardVariants' });

const Card = createRestyleComponent<Props, Theme>(
  [spacing, cardVariant as any],
  View,
);

export type CardProps = ComponentProps<typeof Card>;

export default Card;
