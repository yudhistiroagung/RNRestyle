import { ComponentProps } from 'react';
import { createBox } from '@shopify/restyle';

import { Theme } from '@/theme';

const Box = createBox<Theme>();

export type BoxProps = ComponentProps<typeof Box>;

export default Box;
