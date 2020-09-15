import React from 'react';
import {Text, View, Button} from 'react-native';

export default function Detail({navigation}) {
  return (
    <View>
      <Text>Button list</Text>
      <Text>dss</Text>
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
      <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}
