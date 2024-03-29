import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';

import Filter from '../components/Filter';
import Form from '../components/From';
import Word from '../components/Word';


export default class Main extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Form />
        <Filter />
        <Word />
      </SafeAreaView>
    );
  }
}
// ismemorized : Forgot - màu xanh
// isMemorized == false : Memorized - màu đỏ

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  containerWord: {
    marginTop: '2%',
    justifyContent: 'center',
    height: '13%',
    flexDirection: 'column',
    backgroundColor: 'gainsboro',
    elevation: 5,
    borderRadius: 5,
  },
  containerText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  containerTouchable: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textStyleEn: {
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
  },
  textStyleVn: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
  },
  touchForgot: {
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 5,
  },
  touchRemove: {
    padding: 10,
    backgroundColor: 'yellow',
    borderRadius: 5,
  },
  textTouchForgot: {
    fontSize: 14,
    color: 'white',
  },
  textTouchRemove: {
    fontSize: 14,
    color: 'black',
  },
  containerPickerStyle: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: 'black',
    padding: 20,
    marginBottom: 5,
  },
  pickerStyle: {
    padding: 50,
  },
});