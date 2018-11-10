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

const {width, height} = Dimensions.get('window');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;
console.log({width, height});
export default class DiningHallsScreen extends Component {
    render() {
        return(
            <View style={styles.container}>
            <Text style={styles.title}>
            Where do you want to eat?
            </Text>
            <DiningHall 
            imageSource={{uri: "https://pr.princeton.edu/pwb/05/1024/m/1aIMG_8963.jpg"}}
            name='Mathey'
            />
            <DiningHall
            imageSource={{uri: "https://pr.princeton.edu/pwb/05/1024/m/1aIMG_8963.jpg"}}
            name='Rocky'
            />

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
            <TouchableOpacity 
            style={styles.optionBox}
            onPress={() => this.props.whenPressed}>
            <Text style={styles.optionName}>
            {this.props.name}
            </Text>
            </TouchableOpacity>
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
        color: 'pink',
        fontSize: 20,
        textAlign: 'left',
    }
})