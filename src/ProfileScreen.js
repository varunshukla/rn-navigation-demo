import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default function ProfileScreen() {
  return (
    <View style={styles.screen}>
      <Text>ProfileScreen!</Text>
      <Text>{'Details: '}</Text>
      <Text>{'Title: '}</Text>
    </View>
  );
}
