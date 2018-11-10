// This file is merely a template for the start of a given file,
// so that I can Live Code with the Application
import React from 'react';
import {
	Text,
	StyleSheet,
	TextInput,
	View,
	Picker,
	TouchableOpacity,
	Image
} from 'react-native';
import PULogo from '../components/PULogo'

export default class Begin extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		let pic = {
			uri: "https://cdn-images-1.medium.com/max/677/1*eF9vnscdeCA8pj1G3Jjh-A.jpeg"
		}
		return(
				<View style={styles.signupTextCont}>
					<PULogo/>
					<TouchableOpacity style = {styles.DiningHall} onPress={() => this.props.navigation.navigate('DiningHall')}>
						<Text style={styles.textDiningHall}>Dining Hall Menus</Text>
	              		<Image source={pic} style={{width: 130, height: 80}}/>
	            	</TouchableOpacity>
					<Text style={styles.labelText}>This is the Home Page</Text>

		            <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')}>
	              		<Text style={styles.signupText}>Back to HomeScreen</Text>
	            	</TouchableOpacity>
	            	
          		</View>
		)
	}
}

const styles = StyleSheet.create({
	signupTextCont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    paddingBottom: 150,
    backgroundColor: '#ffffff'
  },
	signupText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500'
  },
  	DiningHall: {
  		borderTopColor: 'black',
    	borderTopWidth: 1,
    	paddingBottom: 2,
    	paddingTop: 2,
    	flexDirection: 'row',
    	backgroundColor: "orange"
  	},
  	textDiningHall: {
  		paddingRight: 80,
  		paddingTop: 30,
  		fontSize: 18,
  		fontWeight: "500",
  		paddingLeft: 10
  	}
})