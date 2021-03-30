import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import PlanScreen from './PlanScreen';
import Dummy1Screen from './Dummy1Screen';
import Dummy2Screen from './Dummy2Screen';

const Tab = createMaterialBottomTabNavigator();

export const BottomTabs = (props) => {
  return (
    <Tab.Navigator
      initialRouteName="Plans"
      shifting={true}
      sceneAnimationEnabled={false}>
      <Tab.Screen
        name="Plans"
        component={PlanScreen}
        // options={{
        //   headerTitle: 'Plans Data',
        // }}
      />
      <Tab.Screen
        name="Dummy1"
        component={Dummy1Screen}
        // options={{
        //   headerTitle: 'Dummy 1 Data',
        // }}
      />
      <Tab.Screen
        name="Dummy2"
        component={Dummy2Screen}
        // options={{
        //   headerTitle: 'Dummy 2 Data',
        // }}
      />
    </Tab.Navigator>
  );
};
