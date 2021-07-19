import React from 'react'
import {
    View,
    Text
}from 'react-native'

class ExLyfecycle extends React.Component{
    constructor(){
        super()
        console.warn("Constructor")
    }
    componentDidMount(){
        console.warn("Did Mount Method")
    }
    render(){
        console.warn("Render Method");
        return(
            <View>
                <Text style={{fontSize:80}}>LifeCycle Methods</Text>
            </View>
        )
    }
}

export default ExLyfecycle;