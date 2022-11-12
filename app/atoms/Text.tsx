import { ComponentProps } from 'react';
import { createText } from '@shopify/restyle';

import { Theme } from '@/theme';

const Text = createText<Theme>();

export type TextProps = ComponentProps<typeof Text>;

export default Text;
