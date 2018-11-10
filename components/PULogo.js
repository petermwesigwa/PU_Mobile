import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image 
 } from 'react-native';

 // This will need to be edited for design purposes.

 export default class PULogo extends React.Component {
 	render() {
 		let pic = {
 			uri: 'https://www.princeton.edu/~oktour/virtualtour/korean/Images/Small/Shield.gif'
 		};
 		return (
 			<View style={styles.container}>
	 			<Image source={pic} style={{width: 135, height: 150}}/>
 			</View>	
 		)
 	}
 }

 const styles = StyleSheet.create({
 	container: {
 		height: 150,
 		margin: 40,
 		flexDirection: 'column',
 		justifyContent: 'flex-start',
 		alignItems: 'center'
 	},
 	text: {
 		color: 'white',
 		fontSize: 30
 	}
 })