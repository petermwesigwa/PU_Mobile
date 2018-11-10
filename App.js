import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Image
} from 'react-native';

import HomeScreen from './screens/HomeScreen';
import Navigator from './Routes';

export default class App extends React.Component {
  render() {
    return (
        <Navigator/>     
    );
  }
}
