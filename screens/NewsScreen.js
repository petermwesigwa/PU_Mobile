import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList
} from 'react-native';

import {DATABASE_URL} from '../utils/settings' 

export default class NewsScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dtdate: new Date().getDay(),
            news_stories: null
        }
    }
    async componentDidMount() {
        let day = this.state.dtdate
        console.log(day)
        if (day == 0) day = 'Sunday'
        else if (day == 1) day = 'Monday'
        else if (day == 2) day = 'Tuesday'
        else if (day == 3) day = 'Wednesday'
        else if (day == 4) day = 'Thursday'
        else if (day == 5) day = 'Friday'
        else if (day == 6) day = 'Saturday'
        console.log(day)
        let url = DATABASE_URL + '/news/' + day
        let response = await fetch(url)
        let responseJson = await response.json()
        this.setState({
            news_stories: responseJson
        })
        console.log(this.state)
    }
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