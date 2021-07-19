{/*
    State :
        State is specially use to change the data from Form.
*/}

import React from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'

class State extends React.Component{
    constructor(){
        super()
        this.state={
            data:"This is a State data"
        }
    }
    test(){
        this.setState({data:"new State data"})
    }
    render(){
        return(
            <View>
                <Text style={{fontSize:50}}>{this.state.data}</Text>
                <Button title="Update State" onPress={()=>{this.test() }}/>
            </View>
        );
    }
}

export default State;