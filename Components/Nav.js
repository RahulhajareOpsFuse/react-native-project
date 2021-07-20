import React from 'react'
import{
    View,Text
}from 'react-native'
import{
    createAppContainer
} from 'react-navigation'
import {
    createStackNavigator
}from 'react-navigation-stack'
import App from '../App'

class Nav extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <View>
                <Text style={{fontSize:80}}>React navigation</Text>
            </View>
        )
    }
}
const appNavigator=createStackNavigator({
    Home:{
        screen:App
    }
})

export default createAppContainer(appNavigator);