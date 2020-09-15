import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default function InvestmentsScreen() {
  return (
    <View style={styles.screen}>
      <Text>InvestmentsScreen! Here</Text>
    </View>
  );
}
