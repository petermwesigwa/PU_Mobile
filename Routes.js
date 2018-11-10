import React from 'react';

import {
	createStackNavigator
} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';


const Navigator = createStackNavigator({
	HomeScreen: { screen: HomeScreen }

},
{
	initialRouteName: 'HomeScreen',
	headerMode: '"None'
});

export default Navigator;