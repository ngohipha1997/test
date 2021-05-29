import React, { Component } from 'react'
import { SafeAreaView, Text, View } from 'react-native';
import Box from './src/components/Box';
import Filter from './src/components/Filter';
import From from './src/components/From';
import Word from './src/components/Word';
import Main from './src/screens/Main';
import { combineReducers, createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import { template } from '@babel/core';
import store from './src/redux/store';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        {/* <Main /> */}
        {/* <Form/> */}
        {/* <Filter /> */}
        {/* <Word /> */}
        <Provider store={store}>
          <Main />
        </Provider>
      </SafeAreaView>
    );
  }
}