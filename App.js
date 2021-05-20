import React, { Component } from 'react'
import { SafeAreaView, Text, View } from 'react-native';
import Box from './src/components/Box';
import Filter from './src/components/Filter';
import From from './src/components/From';
import Word from './src/components/Word';
import Main from './src/screens/Main';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex : 1 }}> 
        <Main />
        {/* <Box/> */}
        {/* <From /> */}
        {/* <Filter/> */}
        {/* <Word/> */}
      </SafeAreaView>
    );
  }
}
