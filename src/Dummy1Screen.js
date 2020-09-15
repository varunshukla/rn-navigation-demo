import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default function Dummy1Screen() {
  return (
    <View style={styles.screen}>
      <Text>Dummy1Screen!</Text>
      <Text>{'Details: '}</Text>
      <Text>{'Title: '}</Text>
    </View>
  );
}
