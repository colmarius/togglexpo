import 'expo-dev-client';
import 'expo-dev-launcher';
import 'expo/build/Expo.fx';

import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';

import App from './App';

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(App);
