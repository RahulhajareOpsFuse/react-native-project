{/*
    componentDidMount();
        -this method is always called at the end of react-native lifecycle method.
        -Basically use to call API under this method. becuse all html elements are set properly.
*/}

import React from 'react'
import{
    View,
    Text
}from 'react-native'

import App from '../App'

class ExDidMountMethod extends React.Component{
    constructor(){
        super()
        //console.warn("Constructor Method is called")
        this.state={
            data:""
        }
    }
    componentDidMount(){
        //always use to fetch api under this method.
        //let fetch api here.
        this.setState({data:"Data from Api and componentDidMount() Method"})
    }
    render(){
        return(
            <View>
                <Text style={{fontSize:30}}>
                    {this.state.data}
                </Text>
            </View>
        );
    }
}

export default ExDidMountMethod;
