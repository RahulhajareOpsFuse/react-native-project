{/**
    Api Call in React-Native:
        -Api is chunks of JSON y
        -api provides interactions between fronend and backend.
        -We always call api under componentDidMountMethod.

*/}

import React from 'react'
import{
    View,
    Text,FlatList
}from 'react-native'
 class CallApi extends React.Component{
     constructor()
     {
         super()
         this.state={
             data:[]
         }
     }
     componentDidMount(){
         this.callApi()
     }
     async callApi(){
         let resp=await fetch('https://reactnative.dev/movies.json')
         let respJson=await resp.json()
         //console.warn("respIson",respJson)
         this.setState({data:respJson})
     }
     render(){
         //console.warn("render",this .state.data)
         return(
             <View>
                 <Text style={{fontSize:40}}>
                     Api Call
                 </Text>
                <FlatList
                data={this.state.data} renderItem={({item})=><Text style={{color:'white',fontSize:50}}>{item.title}</Text>}/>
             </View>
         )
     }
 }

 export default CallApi;