import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import {API_SERVER} from '../utils/settings'

export default class MenuScreen extends Component {
    async getDiningHall() {
        const parseString = require('react-native-xml2js').parseString;

        
        let url = API_SERVER + '&locationNum=' + this.state.locationNum + '&dtdate=' + this.state.dtdate
        console.log(url)
        let response = await fetch(url)
        console.log(response._bodyText)
        let XMLParser = require('react-xml-parser');
        let xml = new XMLParser().parseFromString(response._bodyText);
        console.log(xml.getElementsByTagName('meal'))
        return xml.getElementsByTagName('meal')
    }
    constructor(props) {
        super(props)
        let date = new Date()
        this.state = {
            locationNum: this.props.navigation.state.params.locationNum,
            dtdate: (date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getFullYear()
        }
        console.log("Current DHall is " + this.state.locationNum)
        console.log("Current Date is " + this.state.dtdate)
    }
    async componentDidMount() {
        let menu = await this.getDiningHall()
        console.log(menu)
        console.log(menu.length)

        // Iterating over the meals
        for (i = 0; i < menu.length; i++)
        {
            console.log("Meal: " + menu[i].attributes.name)
            // Iterating over the entrees
            for (j = 0; j < menu[i].children.length; j++)
            {
                let food = menu[i].children[j].children[0].value
                let allergens = menu[i].children[j].children[14].value
                console.log("Food: " + food)
                console.log("Allergens: " + allergens)
            }
        }
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