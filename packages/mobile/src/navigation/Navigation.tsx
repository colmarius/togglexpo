import { NavigationContainer, Theme } from '@react-navigation/native';
import * as React from 'react';

import LinkingConfiguration from './LinkingConfiguration';
import { RootNavigator } from './RootNavigator';

export const Navigation = ({ theme }: { theme: Theme }) => (
  <NavigationContainer linking={LinkingConfiguration} theme={theme}>
    <RootNavigator />
  </NavigationContainer>
);
