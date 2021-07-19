/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import {
  StyleSheet,
  View,Text,
} from 'react-native';

import CallApi from './Components/CallApi';


const App=()=>{
  //const data="Rahul Hajare from Newasa"
  return(
    <View>
      {/*<Home data={data}/> */} 
      {/*<State/>*/}
      {/*<ExLyfecycle/>*/}
     {/* <ExFlex/>*/}
     {/*<ExDidMountMethod/>*/}
     {/*<ExFlatlist/>*/}
     <CallApi/>
    </View>
  );
};
export default App;
