import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default function Dummy2Screen() {
  return (
    <View style={styles.screen}>
      <Text>Dummy2Screen!</Text>
      <Text>{'Dummy2Screen: '}</Text>
    </View>
  );
}
