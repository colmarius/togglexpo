/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
/* eslint-disable security/detect-object-injection */
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Pressable } from 'react-native';

import { useColors } from '../hooks';
import {
  CalendarTabScreen,
  ModalScreen,
  NotFoundScreen,
  ReportsTabScreen,
  TimerTabScreen,
} from '../screens';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';

const TabBarIcon = (props: {
  name: React.ComponentProps<typeof MaterialIcons>['name'];
  color: string;
}) => <MaterialIcons size={30} style={{ marginBottom: -3 }} {...props} />;

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  const colors = useColors();

  return (
    <BottomTab.Navigator
      initialRouteName="TimerTab"
      screenOptions={{
        tabBarActiveTintColor: colors.tint,
      }}
    >
      <BottomTab.Screen
        name="TimerTab"
        component={TimerTabScreen}
        options={({ navigation }: RootTabScreenProps<'TimerTab'>) => ({
          title: 'Timer',
          tabBarIcon: ({ color }) => <TabBarIcon name="access-time" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <MaterialIcons
                name="settings"
                size={25}
                color={colors.text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="CalendarTab"
        component={CalendarTabScreen}
        options={{
          title: 'Calendar',
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar-today" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="ReportsTab"
        component={ReportsTabScreen}
        options={{
          title: 'Reports',
          tabBarIcon: ({ color }) => <TabBarIcon name="bar-chart" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
    <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    <Stack.Group screenOptions={{ presentation: 'modal' }}>
      <Stack.Screen name="Modal" component={ModalScreen} />
    </Stack.Group>
  </Stack.Navigator>
);
