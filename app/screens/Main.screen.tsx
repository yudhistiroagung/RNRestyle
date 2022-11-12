import React from 'react';
import { useAtom } from 'jotai';
import { Switch } from 'react-native';

import { activeTheme } from '../states';
import Box from '../atoms/Box';
import SafeAreaView from '../atoms/SafeAreaView';
import Text from '../atoms/Text';

const Main = () => {
  const [theme, setTheme] = useAtom(activeTheme);

  const isDark = theme === 'dark';

  const onToggle = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <SafeAreaView backgroundColor="$background" width="100%" height="100%">
      <Box padding="m" flex={1} flexDirection="column">
        <Box flexDirection="row-reverse" alignItems="center">
          <Switch value={isDark} onChange={onToggle} />
          <Text mr="xs">Dark</Text>
        </Box>
        <Text variant="heading">Restyle</Text>
        <Box height={8} />
        <Text variant="subHeading">
          This project is playground for using and explore restyle library for
          theming
        </Text>
      </Box>
    </SafeAreaView>
  );
};

export default Main;
