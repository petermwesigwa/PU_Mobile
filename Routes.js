import React from 'react';

import {
	createStackNavigator
} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import DiningHall from './screens/dininghalls'


const Navigator = createStackNavigator({
	HomeScreen: { screen: HomeScreen },
	DiningHall: { screen: DiningHall}

},
{
	initialRouteName: 'HomeScreen',
	headerMode: '"None'
});

export default Navigator;