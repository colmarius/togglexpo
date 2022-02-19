/* eslint-disable security/detect-object-injection */
import { useEffect, useState } from 'react';

import { Colors } from '../constants';
import { useColorScheme } from './useColorScheme';

export const useColors = () => {
  const colorScheme = useColorScheme();
  const [colors, setColors] = useState(Colors[colorScheme]);

  useEffect(() => {
    setColors(Colors[colorScheme]);
  }, [colorScheme]);

  return colors;
};
