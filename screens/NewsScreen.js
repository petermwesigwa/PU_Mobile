import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList
} from 'react-native';

import {DATABASE_URL, SCREEN_WIDTH} from '../utils/settings' 

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
    goToArticle(item) {
        console.log(item)
        this.props.navigation.navigate('NewsArticle', {item: item})
    }
    render() {
        return (
            <View style={styles.container}>
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
    }
})