import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-native-paper';
import {RootNavigator} from './src/RootNavigator';

const styles = StyleSheet.create({
  sav: {flex: 1},
});

export default function App() {
  return (
    <SafeAreaView style={styles.sav}>
      <Provider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}
