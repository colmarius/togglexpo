import React from 'react';
import { StyleSheet } from 'react-native';

import { EditScreenInfo, Text, View } from '../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export const ReportsTabScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Reports Tab</Text>
    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    <EditScreenInfo path="/screens/ReportsTabScreen.tsx" />
  </View>
);
