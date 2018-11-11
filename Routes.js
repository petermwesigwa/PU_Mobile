import React from 'react';

import {
	createStackNavigator
} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import DiningHall from './screens/dininghalls';
import DiningMenu from './screens/DiningMenu';
import NewsScreen from './screens/NewsScreen'
import NewsArticle from './screens/NewsArticle'


const Navigator = createStackNavigator({
	HomeScreen: { screen: HomeScreen },
	DiningHall: { screen: DiningHall},
	DiningMenu: { screen: DiningMenu},
	NewsScreen: { screen: NewsScreen},
	NewsArticle: { screen: NewsArticle }
},
{
	initialRouteName: 'HomeScreen',
	headerMode: '"None'
});

export default Navigator;