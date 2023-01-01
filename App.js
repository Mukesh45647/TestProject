// In App.js in a new project

import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppNavigator from './src/navigator/AppNavigator';
import { Provider } from 'react-redux';
import store from './redux/store'


function App() {
  return <Provider store={store}><AppNavigator /></Provider> ;
}

export default App;
