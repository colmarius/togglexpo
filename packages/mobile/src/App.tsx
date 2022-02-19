import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { DefaultTheme as PaperDefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useCachedResources, useColorScheme } from './hooks';
import { Navigation } from './navigation';

const paperTheme = {
  ...PaperDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

export const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <PaperProvider theme={paperTheme}>
          <Navigation theme={theme} />
          <StatusBar />
        </PaperProvider>
      </SafeAreaProvider>
    );
  }
};
