import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import {SCREEN_WIDTH} from '../utils/settings' 


export default class NewsArticle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: this.props.navigation.state.params.item
        }
        console.log(this.state)
    }
    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.headline}>{this.state.item.headline}</Text>
            <ScrollView>
            <Text style={styles.article}>{this.state.item.article}</Text>
            </ScrollView>
            <TouchableOpacity
            style={styles.button} 
            onPress={() => this.props.navigation.navigate('NewsScreen')}>
            <Text style={styles.buttonText}> Back to News </Text>
            </TouchableOpacity>
            </View>
        )
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
        margin: 50
    },
    container: {
        flex: 1, 
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headline: {
        color: "darkorange",
        fontFamily: "Times New Roman",
        fontSize: 25,
        marginTop: 80
    },
    article: {
        fontFamily: "Times New Roman",
        margin: 20,
        fontSize: 17
    }
})