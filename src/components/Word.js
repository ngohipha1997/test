import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import WordItem from './WordItem';
import {connect} from 'react-redux';
class Word extends Component {
  onToggleWord = (word) => {
    // this.props.toggleWord(word);
  };
  onRemoveWord = (word) => {
    // this.props.removeWord(word);
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.words}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <WordItem
                word={item}
                filterMode={this.props.filterMode}
                onToggleWord={this.onToggleWord}
                onRemoveWord={this.onRemoveWord}
              />
            );
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state) => {
  return {words: state.words, filterMode: state.filterMode};
};

export default connect(mapStateToProps)(Word);