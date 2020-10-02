import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {inject, observer} from 'mobx-react';
@inject('store')
@observer
class Product extends React.Component {
  onPressButton(title, url, id) {
    this.props.store.addtproduct({
      title: title,
      url: url,
      id: id,
    });
  }
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Image
          source={{uri: this.props.url}}
          style={{width: 100, height: 100, margin: '3%'}}
        />
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text>{this.props.title}</Text>
        </View>
        <TouchableOpacity
          onPress={() => this.onPressButton(this.props.title, this.props.url,this.props.id)}>
          <Text>Ekle</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ımage: {
    width: 150,
    height: 150,
  },
  container: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Product;
