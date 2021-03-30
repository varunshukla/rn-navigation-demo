import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
});

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <Text>SettingScreen!</Text>
        <Text>{'Details: 1'}</Text>
        <Text>{'Title: 11'}</Text>
      </View>
    );
  }
}
