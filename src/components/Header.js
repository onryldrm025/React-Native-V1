import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.name}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: '5%',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Header;
