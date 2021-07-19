{/*
    Flex:
        Flex is used to control layout of a control in our program.
        flex is response automatically acoording to device configuration.

*/}
import React from 'react'
import{
    View,
    Text
}from 'react-native'

class ExFlex extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:1,backgroundColor:'red'}}><Text>Rahul Hajare</Text></View>
                <View style={{flex:2,backgroundColor:'red'}}><Text>Rahul Hajare</Text></View>
            </View>
        );
    }
}

export default ExFlex;