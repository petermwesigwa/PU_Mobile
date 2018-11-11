import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList
} from 'react-native';

import {DATABASE_URL, SCREEN_WIDTH, SCREEN_HEIGHT} from '../utils/settings' 

export default class NewsScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dtdate: new Date(),
            news_stories: null
        }
    }
    async componentDidMount() {
        let date_endpoint = (this.state.dtdate.getMonth() + 1) + '-' + this.state.dtdate.getDate() + '-' + this.state.dtdate.getFullYear()         
        let url = DATABASE_URL + '/news/' + date_endpoint
        let response = await fetch(url)
        let responseJson = await response.json()
        this.setState({
            news_stories: responseJson
        })
        if (responseJson.length == 0) 
            this.setState({
            news_stories: null
        })
        console.log(responseJson.length)
    }
    goToArticle(item) {
        console.log(item)
        this.props.navigation.navigate('NewsArticle', {item: item})
    }
    async goToNextDay() {
        var current = this.state.dtdate
        var nextDate = current
        nextDate.setDate(current.getDate() + 1)
        let date_endpoint = (nextDate.getMonth() + 1) + '-' + nextDate.getDate() + '-' + nextDate.getFullYear()
        let url = DATABASE_URL + '/news/' + date_endpoint
        let response = await fetch(url)
        let responseJson = await response.json()      
        this.setState({
            dtdate: nextDate,
            news_stories: responseJson
        });
        if (responseJson.length == 0) 
            this.setState({
            news_stories: null
        })
        console.log(this.state)
    }
    async goToPreviousDay() {
        var current = this.state.dtdate
        var prevDate = current
        prevDate.setDate(current.getDate() - 1)
        let date_endpoint = (prevDate.getMonth() + 1) + '-' + prevDate.getDate() + '-' + prevDate.getFullYear()
        let url = DATABASE_URL + '/news/' + date_endpoint
        let response = await fetch(url)
        let responseJson = await response.json()      
        this.setState({
            dtdate: prevDate,
            news_stories: responseJson
        });
        if (responseJson.length == 0) 
            this.setState({
            news_stories: null
        })
        console.log(this.state)
    }
    render() {
        if (this.state.news_stories == null) {
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
                <Text style={{
                    fontSize: 24, 
                    marginTop: 50,
                    fontFamily: "Times New Roman"
                }}>News Stories</Text>

                <Text>There are no News Stories to Show from Today</Text>

                <TouchableOpacity
                style={styles.buttonError} 
                onPress={() => this.props.navigation.navigate('HomeScreen')}>
                <Text style={styles.buttonText}> Back to Home </Text>
                </TouchableOpacity>
                </View>
            )
        }
        return (
            <View style={styles.container}>
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
            <Text style={{
                fontSize: 24, 
                marginTop: 50,
                fontFamily: "Times New Roman"
            }}>News Stories</Text>
            
            <FlatList 
            contentContainerStyle={styles.newsItems}
            data={this.state.news_stories}
            keyExtractor={item => item.description}
            renderItem={({item}) => 
                <View style={{margin: 20, borderColor: 'orange', borderBottomWidth: 1,}}>
                <TouchableOpacity
                onPress={()=> this.goToArticle(item)}
                >
                <Text style={styles.headline}>{item.headline}</Text>
                <Text style={styles.description}>{item.description}</Text>
                </TouchableOpacity>
                </View>
            }
            />
            <TouchableOpacity
            style={styles.button} 
            onPress={() => this.props.navigation.navigate('HomeScreen')}>
            <Text style={styles.buttonText}> Back to Home </Text>
            </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonError: {
        backgroundColor: '#ee6002',
        borderRadius: 25,
        width: SCREEN_WIDTH - 100,
        marginTop: SCREEN_HEIGHT - 380
    },
    containerError: {
        paddingTop: 40,
        flex: 1, 
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "white"
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
        margin: 50
    },
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 20
    },

    newsItems: {
        margin: 10,
        padding: 25,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    headline: {
        fontSize: 20,
        color: "darkred",
        marginBottom: 5,
        fontFamily: "Times-Bold"
    },
    description: {
        fontSize: 16,
        fontFamily: "Times New Roman"
    },
    date: {
        flexDirection: 'row',
        height: 40,
        width: SCREEN_WIDTH - 100,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 50
    }
})