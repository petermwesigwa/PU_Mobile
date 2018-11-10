/* Authored by Peter Mwesigwa

Rendered when the user selects the dinihg option on the homescreen

shows the various dining halls that the user can choose to go to
*/

import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    View, 
    TouchableOpacity,
    ImageBackground,
    ScrollView
} from 'react-native';

import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../utils/settings'
import PULogo from '../components/PULogo'

WHITMAN_IMG = require('../assets/images/Whitman.jpg')
WILCOX_IMG = require('../assets/images/Wilcox.jpg')
ROMA_IMG = require('../assets/images/Roma.jpg')
CJL_IMG = require('../assets/images/CJL.jpg')
FORBES_IMG = require('../assets/images/Forbes.jpg')
GRADUATE_IMG = require('../assets/images/graduate.jpg')

const WILCOX = "02"
const CJL = "05"
const FORBES = "03"
const GRADUATE = "04"
const ROMA = "01"
const WHITMAN = "08"
export default class DiningHallsScreen extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            
            <View style={styles.container}>
            <PULogo/>
            <ScrollView>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('DiningMenu',{
                locationNum: ROMA, 
                dtdate: new Date(),
                hall: "Rocky/Mathey"
            })}>
            <DiningHall 
            imageSource={ROMA_IMG}
            name='RoMa Dining Hall'
            />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('DiningMenu',{
                locationNum: WILCOX,
                dtdate: new Date(),
                hall: "Wilcox"
            })}>
            <DiningHall
            imageSource={WILCOX_IMG}
            name='Wilcox Dining Hall'
            />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('DiningMenu',{
                locationNum: FORBES,
                dtdate: new Date(),
                hall: "Forbes"
            })}>
            <DiningHall
            imageSource={FORBES_IMG}
            name='Forbes Dining Hall'
            whenPressed={() => this.props.navigation.navigate('DiningMenu')}
            />
            </TouchableOpacity>    

            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('DiningMenu',{
                locationNum: GRADUATE, 
                dtdate: new Date(),
                hall: "Graduate College"
            })}>
            <DiningHall 
            imageSource={GRADUATE_IMG}
            name='Graduate College Dining Hall'
            />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('DiningMenu',{
                locationNum: CJL, 
                dtdate: new Date(),
                hall: "Center for Jewish Life"
            })}>
            <DiningHall 
            imageSource={CJL_IMG}
            name='Center for Jewish Life'
            />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('DiningMenu',{
                locationNum: WHITMAN, 
                dtdate: new Date(),
                hall: "Whitman"
            })}>
            <DiningHall 
            imageSource={WHITMAN_IMG}
            name='Whitman Dining Hall'
            />
            </TouchableOpacity>
            </ScrollView>
            <TouchableOpacity
            style={styles.button} 
            onPress={() => this.props.navigation.navigate('HomeScreen')}>
            <Text style={styles.buttonText}> Back to Home </Text>
            </TouchableOpacity>
            </View>
            
        );
        }
}

/* render each option that users have to eat from */
class DiningHall extends Component {
    render() {
        return (
            <ImageBackground 
            source={this.props.imageSource}
            style={styles.optionBox}
            style={[{resizeMode: 'stretch'}, {marginVertical: 10}]}>
            <View
            style={styles.optionBox}
            onPress={() => this.props.navigation.navigate("DiningMenu")}>
            <Text style={styles.optionName}>
            {this.props.name}
            </Text>
            </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        paddingVertical: 16
    },
      button: {
        backgroundColor: '#ee6002',
        borderRadius: 25,
        width: SCREEN_WIDTH - 100,
        margin: 20
    },
    title: {
        fontSize: 20,
        color: 'red',
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: "white"
    },
    optionBox: {
        height: 60,
        width: SCREEN_WIDTH - 100,
        marginHorizontal: 20,
        marginVertical: 20,
        justifyContent: 'flex-end',

    },

    optionName: {
        color: 'skyblue',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    signupText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    paddingBottom: 40
  },
})