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
    Dimensions,
} from 'react-native';

import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../utils/settings'

const WILCOX = "02"
const CJL = "05"
const FORBES = "03"
const GRADUATE = "04"
const ROMA = "01"
const WHITMAN = "08"
export default class DiningHallsScreen extends Component {

    render() {
        return(
            <View style={styles.container}>
            <Text style={styles.title}>
            Where do you want to eat?
            </Text>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('DiningMenu',{locationNum: ROMA})}>
            <DiningHall 
            imageSource={{uri: "https://avatars.mds.yandex.net/get-pdb/25978/44b025de-0a10-49d3-acde-a9283fac9105/s1200"}}
            name='RoMa Dining Hall'
            />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('DiningMenu',{locationNum: WILCOX})}>
            <DiningHall
            imageSource={{uri: "https://bunge.s3.amazonaws.com/categories/images/000/000/006/content/Super-Cat-Food-Ingredients.jpg?1357968333"}}
            name='Wilcox Dining Hall'
            />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('DiningMenu',{locationNum: FORBES})}>
            <DiningHall
            imageSource={{uri: "http://i.dawn.com/large/2016/05/5742bf39a45f0.jpg"}}
            name='Forbes Dining Hall'
            whenPressed={() => this.props.navigation.navigate('DiningMenu')}
            />
            </TouchableOpacity>    

            <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')}>
                <Text style={styles.signupText}>Back to HomeScreen</Text>
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
    title: {
        fontSize: 20,
        color: 'red',
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: SCREEN_HEIGHT / 8,
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
    }
})