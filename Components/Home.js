{/*
    Props:- 
        We can trsnsfer data between two components through the props.
        props is a propertie or data(present inside functions(components)).
        eg: button, image have props like title ,source, onPress  etc.
        
*/}

import React from 'react'
import {
    Text,
    View,
    Button
}from 'react-native'

const Home=(props)=>{
    console.warn(props)
    return(

        <View>
            <Text style={{fontSize:50, color:'red'}}>{props.data}</Text>
            <Button title="press me"/> 
        </View>
    )
}

export default Home;