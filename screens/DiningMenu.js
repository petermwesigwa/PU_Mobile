import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

export default class MenuScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')}>
            <Text> HomeScreen </Text>
            </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    }
})