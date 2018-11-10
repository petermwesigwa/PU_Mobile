import React from 'react';

import {
	createStackNavigator
} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import DiningHall from './screens/dininghalls';
import DiningMenu from './screens/DiningMenu';


const Navigator = createStackNavigator({
	HomeScreen: { screen: HomeScreen },
	DiningHall: { screen: DiningHall},
	DiningMenu: { screen: DiningMenu}
},
{
	initialRouteName: 'HomeScreen',
	headerMode: '"None'
});

export default Navigator;