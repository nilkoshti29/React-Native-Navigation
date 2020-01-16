/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import HomeScreen from './pages/HomeScreen';
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => HomeScreen);

