import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from './DrawerContent';
import {StackNavigator} from './StackNavigator';

const Drawer = createDrawerNavigator();

export const RootNavigator = (props) => {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={StackNavigator} />
    </Drawer.Navigator>
  );
};
