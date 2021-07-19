{/*
    class Components:
        we can use state in class components, Lifecycle Methods whereas in functional components
        we need hooks to use this components.
        -when we need to use long amount of logic(ex calculation of bills, validation) then we
         need to use a state and at that time we use a class components.
        -By default react native provide functional components for us.
        -
*/}

import React, { Component } from 'react'
import{
    View,
    Text,
    Button
}from 'react-native'

//create class components.
class ClassComponents extends Component{
    render(){
        return(
            <View>
                <Text style={{fontSize:80}}>ClassComponents</Text>
                <Button title="Press Me"onPress={()=>{alert(`Hello Class Components`)}} />
            </View>
        )
    }
}

export default ClassComponents;