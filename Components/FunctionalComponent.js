{/*  
Functional component:
    when we need to write small amount of a logic then we use a functional componens.

*/}
import React from 'react'
import{
    View,
    Button,
    Text,
    TouchableHighlight
}from 'react-native'
import Login from './login';


const FunctionalComponent=()=>{
        return(
            <View>
                <Text>
                    Functional Component Example.
                </Text>
                <Button title="Login" onPress={()=>{alert(`Hii Rahul`)}}/>
            </View>
        )
    }



export default FunctionalComponent;