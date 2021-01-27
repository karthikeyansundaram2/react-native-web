/**
 * @format
 */

import App from '../src/App';
import {name as appName} from '../src/app.json';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={styles.box}>
        <Text style={styles.text}>Hello, world!</Text>
      </View>
    );
  }
}
// AppRegistry.registerComponent(appName, () => App);

  
  AppRegistry.registerComponent(appName, () => App);
