import { ComponentProps } from 'react';
import { createBox } from '@shopify/restyle';
import { SafeAreaView as RNSafeAreaView } from 'react-native';

import { Theme } from '@/theme';

const SafeAreaView = createBox<Theme>(RNSafeAreaView);

export type SafeAreaViewProps = ComponentProps<typeof SafeAreaView>;

export default SafeAreaView;
