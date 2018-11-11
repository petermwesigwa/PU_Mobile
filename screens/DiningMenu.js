import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
} from 'react-native';

import {API_SERVER, SCREEN_WIDTH, SCREEN_HEIGHT} from '../utils/settings'

export default class MenuScreen extends Component {
    async getDiningHall() {
        const parseString = require('react-native-xml2js').parseString;

        let date_string = (this.state.dtdate.getMonth() + 1) + '-' + this.state.dtdate.getDate() + '-' + this.state.dtdate.getFullYear()
        let url = API_SERVER + '&locationNum=' + this.state.locationNum + '&dtdate=' + date_string
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
        console.log("Constructed-----------------")
        this.state = {
            locationNum: this.props.navigation.state.params.locationNum,
            dtdate: this.props.navigation.state.params.dtdate,
            menuObj: null,
            hall: this.props.navigation.state.params.hall,
            error: null
        }
        console.log("Current DHall is " + this.state.locationNum)
        console.log("Current Date is " + this.state.dtdate)
    }
    async componentDidMount() {
        console.log("Component Did Mount ----------------")
        let menu = await this.getDiningHall();
        this.setState({
            menuObj: menu
        });
        console.log(this.state.menuObj);
        console.log(menu.length)
        if (menu.length == 0) 
            this.setState({
                error: 'No Food Listing Available for Today'
            }) 

        // Iterating over the meals
        for (i = 0; i < menu.length; i++)
        {
            let meal = menu[i].attributes.name
            console.log("Meal: " + meal)
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

    async goToPreviousDay() {
        var current = this.state.dtdate
        var prevDate = current
        prevDate.setDate(current.getDate() - 1)
        let menu = await this.getDiningHall();
        if (menu.length == 0) {
            this.setState({
                error: "No Food Listing Available for Today"
            }) 
            return
        }   
        this.setState({
            locationNum: this.state.locationNum,
            dtdate: prevDate,
            menuObj: menu,
            error: null
        })
        console.log(this.state)
    }

    async goToNextDay() {
        var current = this.state.dtdate
        var nextDate = current
        nextDate.setDate(current.getDate() + 1)
        let menu = await this.getDiningHall();
        if (menu.length == 0) {
            this.setState({
                error: "No Food Listing Available for Today"
            }) 
            return
        }       
        this.setState({
            locationNum: this.state.locationNum,
            dtdate: nextDate,
            menuObj: menu,
            error: null
        });
        console.log(this.state)
    }

    render() {
        if (this.state.error != null) {
            return(
                <View style={styles.containerError}>
                    <View style = {styles.date}>
                        <TouchableOpacity
                        onPress={() => this.goToPreviousDay()}>
                        <Text> {'<'}</Text>
                        </TouchableOpacity>
                        <Text> {this.state.dtdate.toDateString()}</Text>
                        <TouchableOpacity
                        onPress={() => this.goToNextDay()}>
                        <Text> {'>'}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        paddingTop: 20
                    }}>
                        <Text style={{
                            fontSize: 20,
                            color: "darkorange"
                        }}>{this.state.hall}</Text>
                    </View>
                    <Text>{this.state.error}</Text>
                    <View style={{height: SCREEN_HEIGHT - 300}}></View>
                    <TouchableOpacity
                    style={styles.button} 
                    onPress={() => this.props.navigation.navigate('DiningHall')}>
                    <Text style={styles.buttonText}> Back to Dining Halls </Text>
                    </TouchableOpacity>
                </View>
            )
        }
        return (
            <View style={styles.container}>
            <View style = {styles.date}>
            <TouchableOpacity
            onPress={() => this.goToPreviousDay()}>
            <Text style={{fontSize: 20}}> {'<'}</Text>
            </TouchableOpacity>
            <Text> {this.state.dtdate.toDateString()}</Text>
            <TouchableOpacity
            onPress={() => this.goToNextDay()}>
            <Text> {'>'}</Text>
            </TouchableOpacity>
            </View>
            <View style={{
                paddingTop: 20
            }}>
                <Text style={{
                    fontSize: 20,
                    color: "darkorange"
                }}>{this.state.hall}</Text>
            </View>
            <FlatList 
            style={styles.options}
            data={this.state.menuObj}
            keyExtractor={item => item.attributes.name}
            renderItem={({item}) =>
            <View style={styles.meal}>
            <Text style={styles.mealName}>{item.attributes.name}</Text>
            <MealEntrees mealArray = {item.children}/>
            </View>  }/>
        

            <TouchableOpacity
            style={styles.button} 
            onPress={() => this.props.navigation.navigate('DiningHall')}>
            <Text style={styles.buttonText}> Back to Dining Halls </Text>
            </TouchableOpacity>
            </View>
        )
    }
}

class MealEntrees extends Component {
    render() {
        return (
            <FlatList
            style={styles.entrees}
            data={this.props.mealArray}
            keyExtractor={item => item.children[0].value}
            renderItem = {({item}) => 
                <View style={styles.entree}>
                <Text style={styles.foodname}>{item.children[0].value.replace('&amp;', '&')}</Text>
                <Text>{"Allergens: " + item.children[14].value.replace('&amp;', '&')}</Text>
                </View>
            }
            />
        );
            
    }
}

const styles = StyleSheet.create({
    containerError: {
        paddingTop: 40,
        flex: 1, 
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    container: {
        paddingTop: 40,
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },

    options: {
        flex: 1,
        height: 200,
        margin: 20
    },

    meal: {
        margin: 10,
        padding: 5,
        width: SCREEN_WIDTH - 80,
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
    },

    entree: {
        margin: 10,
        padding: 5,
        alignItems: 'center',
        borderColor: 'black',
        borderBottomWidth: 1,
    },

    entrees: {
        margin: 10,
        padding: 5,
        alignItems: 'center',
        borderColor: 'black',
        borderTopWidth: 1,
    },

    date: {
        flexDirection: 'row',
        height: 40,
        width: SCREEN_WIDTH - 100,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
    },

    foodname: {
        fontFamily: 'PoorStory-Regular',
        fontSize: 16,
        color: 'red',
    },

    mealName: {
        fontFamily: 'PoorStory-Regular',
        fontSize: 20,
        color: 'maroon',
    },

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
})
