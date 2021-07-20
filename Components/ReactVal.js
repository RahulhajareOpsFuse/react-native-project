import React from 'react'
import{ View,
Text,
TextInput,
Button }from 'react-native'
import { onChange } from 'react-native-reanimated'

class ReactVal extends React.Component{
    constructor(){
        super()
        this.state={
            invalidAddr:""
        }
    }
    checkAddr(e){
        let rgx=/^[a-zA-Z@gmail.com]+$/
        if(!rgx.test(e)){
            this.setState({invalidAddr:"Please Enter Valid Address"})
        }
        else
        {
            this.setState({invalidAddr:""})
        }

    }
    render(){
        return(
            <View style={{justifyContent:"center",alignItems:"center"}}>
                <TextInput
                placeholder="Enter your Name"
                maxLength={10} style={{borderColor:'skyblue',margin:15,borderWidth:1,width:350,borderRadius:10}}></TextInput>
                <TextInput
                placeholder="contact" keyboardType={'numeric'} maxLength={10} style={{borderColor:'skyblue',margin:5,borderWidth:1,width:350,borderRadius:10}}></TextInput>
                <TextInput 
                onChangeText={(e)=>{this.checkAddr(e)}}
                placeholder="Email"
                style={{borderColor:'skyblue',margin:5,borderWidth:1,width:350,borderRadius:10}}></TextInput>
                <Button title="Submit" style={{}}/>
                <Text style={{color:'red', fontSize:30}}>{this.state.invalidAddr}</Text>
            </View>
        )
    }
}

export default ReactVal;