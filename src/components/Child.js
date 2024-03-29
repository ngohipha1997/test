import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';


class Child extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 20,
        }}>
        <TouchableOpacity
          onPress={() => this.props.dispatch({type : 'INCREMENT'})}
          style={{padding: 10, backgroundColor: 'green', borderRadius: 5}}>
          <Text style={{fontSize: 20, color: 'white'}}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.onDecrement()}
          style={{padding: 10, backgroundColor: 'red', borderRadius: 5}}>
          <Text style={{fontSize: 20, color: 'white'}}>Decrement</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.onReset()}
          style={{padding: 10, backgroundColor: 'yellow', borderRadius: 5}}>
          <Text style={{fontSize: 20, color: 'gray'}}>Reset</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default  connect()(Child);