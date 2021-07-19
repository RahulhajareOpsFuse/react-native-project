{/*
    Props:- 
        We can trsnsfer data between two components through the props.
        props is a propertie or data(present inside functions(components)).
        
*/}

import React from 'react'
import {
    Text,
    View,
    Button
}from 'react-native'

import Home from './Home'

const Props=( props)=>{
    return(
        <View>
            <Home/>
        </View>
    )
}

export default Props;