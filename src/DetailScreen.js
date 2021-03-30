import {useNavigation, useTheme} from '@react-navigation/native';
import React from 'react';
import {Text, View, Button} from 'react-native';

export default function Detail(props) {
  const navigation = useNavigation();
  const {colors} = useTheme();
  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <Text>Button list</Text>
      <Text>{JSON.stringify(props)}</Text>
      <Text>{props.route.params.itemId}</Text>
      <Text>{JSON.stringify(props.route.params.itemTitle)}</Text>
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
      <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button title="Dum dum" onPress={() => navigation.navigate('Dummy2')} />
    </View>
  );
}
