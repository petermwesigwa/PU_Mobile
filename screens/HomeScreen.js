// This file is merely a template for the start of a given file,
// so that I can Live Code with the Application


import React from 'react';
import {
	Text,
	StyleSheet,
	TextInput,
	View,
	Picker,
	TouchableOpacity
} from 'react-native';
import PULogo from '../components/PULogo'

export default class Begin extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return(
				<View style={styles.signupTextCont}>
					<PULogo/>
					<Text style={styles.labelText}>This is the Home Page</Text>

		            <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')}>
	              		<Text style={styles.signupText}>Back to HomeScreen</Text>
	            	</TouchableOpacity>

	            	<TouchableOpacity onPress={() => this.props.navigation.navigate('DiningHall')}>
	              		<Text style={styles.signupText}>Go to DiningHall Screen</Text>
	            	</TouchableOpacity>
          		</View>
		)
	}
}

const styles = StyleSheet.create({
	signupTextCont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingBottom: 150,
    backgroundColor: '#ffffff'
  },
	signupText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500'
  },
  	labelText: {
  		flex: 0
  	}
})