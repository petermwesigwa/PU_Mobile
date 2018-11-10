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
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../utils/settings'

export default class Begin extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		let picDining = {
			uri: "https://cdn-images-1.medium.com/max/677/1*eF9vnscdeCA8pj1G3Jjh-A.jpeg"
		}
		let picNews = {
			uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOXSf_Lz_oHiLRtelD7Ce38AHxVKmqeJ0BDjR1I3Ikr8KrJAre'
		}
		return(
				<View style={styles.signupTextCont}>
					<PULogo/>
					<View>
					<TouchableOpacity style = {styles.DiningHall} onPress={() => this.props.navigation.navigate('DiningHall')}>
						<Text style={styles.textDiningHall}>Dining Hall Menus</Text>
	              		<Image source={picDining} style={{width: 130, height: 80}}/>
	            	</TouchableOpacity>
	            	<TouchableOpacity style = {styles.News} onPress={() => this.props.navigation.navigate('NewsScreen')}>
						<Text style={styles.textNews}>News</Text>
	              		<Image source={picNews} style={{width: 130, height: 80}}/>
	            	</TouchableOpacity>
	            	</View>
	            	
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
    	backgroundColor: "orange",
  	},
  	textDiningHall: {
  		paddingTop: 30,
  		fontSize: 18,
  		fontWeight: "500",
  		paddingRight: SCREEN_WIDTH - 295,
  		paddingLeft: 10
  	},
  	News: {
  		borderTopColor: 'black',
    	borderTopWidth: 1,
    	paddingBottom: 2,
    	paddingTop: 2,
    	flexDirection: 'row',
    	backgroundColor: "orange"
  	},
  	textNews: {
  		paddingRight: SCREEN_WIDTH - 192,
  		paddingTop: 30,
  		fontSize: 18,
  		fontWeight: "500",
  		paddingLeft: 10
  	}
})