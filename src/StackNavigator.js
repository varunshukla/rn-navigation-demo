import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StackActions} from '@react-navigation/native';
import DetailScreen from './DetailScreen';
import {BottomTabs} from './BottomTabs';
import Profile from './ProfileScreen';
import Settings from './SettingsScreen';
import {Avatar} from 'react-native-paper';
import {Button, TouchableOpacity} from 'react-native';

const Stack = createStackNavigator();

export function HeaderLeft({navigation}) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.openDrawer();
      }}>
      <Avatar.Image
        size={40}
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
        }}
      />
    </TouchableOpacity>
  );
}

export function HeaderRight(props) {
  const {navigation} = props;
  const {popToTop} = props;
  return (
    <Button
      title="Go To"
      onPress={() => {
        popToTop
          ? navigation.dispatch(StackActions.popToTop())
          : navigation.navigate('Dummy1');
      }}
    />
  );
}
export const StackNavigator = (props) => {
  return (
    <Stack.Navigator initialRouteName="BottomTabs">
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{
          // header: Header
          headerTitle: 'Scripbox | Home',
          headerLeft: () => <HeaderLeft {...props} />,
          headerRight: () => <HeaderRight {...props} />,
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailScreen}
        options={{
          headerTitle: 'Details Data',
          headerRight: () => <HeaderRight {...props} />,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: 'Profile Data',
          headerRight: () => <HeaderRight {...props} />,
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerTitle: 'Settings Data',
          headerRight: () => <HeaderRight {...props} popToTop="true" />,
        }}
      />
    </Stack.Navigator>
  );
};
