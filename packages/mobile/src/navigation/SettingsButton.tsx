import { MaterialIcons } from '@expo/vector-icons';
import * as React from 'react';
import { Pressable } from 'react-native';

import { useColors } from '../hooks';
import { RootTab, RootTabScreenProps } from '../types';

export const SettingsButton = ({ navigation }: Pick<RootTabScreenProps<RootTab>, 'navigation'>) => {
  const colors = useColors();
  return (
    <Pressable
      onPress={() => navigation.navigate('Settings')}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <MaterialIcons name="settings" size={25} color={colors.text} style={{ marginRight: 15 }} />
    </Pressable>
  );
};
