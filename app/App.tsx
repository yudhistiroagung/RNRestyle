import React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { useAtom } from 'jotai';

import { themes } from './theme';
import { activeTheme } from './states';
import MainScreen from './screens/Main.screen';

const App = () => {
  const [theme] = useAtom(activeTheme);

  return (
    <ThemeProvider theme={themes[theme]}>
      <MainScreen />
    </ThemeProvider>
  );
};

export default App;
