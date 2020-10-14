import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {inject, observer} from 'mobx-react';
import Icon from 'react-native-vector-icons/Feather';
import * as RootNavigation from '../store/RootNavigation';
import colors from '../consts/colors';
@inject('store')
@observer
class Catagory extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Ürünler', {
              screen: this.props.item,
            })
          }>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: this.props.store.productFull.find(
                  (item) => item.category === this.props.item,
                ).image,
              }}
            />
          </View>
        </TouchableOpacity>
        <Text>{this.props.item}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: colors.productMainBackground,
    padding: 10,
    display: 'flex',
    width: '30%',
    marginLeft: 10,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: colors.productBorderBackground,
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    height: 100,
    width: 100,
  },
});

export default Catagory;
