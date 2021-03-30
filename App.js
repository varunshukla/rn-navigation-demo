import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {Provider} from 'react-native-paper';
import {RootNavigator} from './src/RootNavigator';

const styles = StyleSheet.create({
  sav: {flex: 1},
});

const DarkTheme = {
  colors: {
    primary: '#ffffff',
    secondary: '#fafafa',
    text: '#000000',
    background: 'cyan',
  },
};

const LightTheme = {
  colors: {
    primary: '#000000',
    secondary: '#ff0000',
    text: '#ffffff',
    background: 'yellow',
  },
};
const CombinedDarkTheme = {
  ...NavigationDarkTheme,
  colors: {...DarkTheme.colors},
};

const CombinedDefaultTheme = {
  ...NavigationDefaultTheme,
  colors: {...LightTheme.colors},
};

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme;
  function toggleTheme() {
    // We will pass this function to Drawer and invoke it on theme switch press
    setIsDarkTheme(!isDarkTheme);
  }
  return (
    <SafeAreaView style={styles.sav}>
      <Provider>
        <NavigationContainer theme={theme}>
          <RootNavigator toggleTheme={toggleTheme} />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}
