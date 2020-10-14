import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {inject, observer} from 'mobx-react';
import Icon from 'react-native-vector-icons/Feather';
import * as RootNavigation from '../store/RootNavigation';
import colors from '../consts/colors';
@inject('store')
@observer
class ProductBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  onPressPlus(id) {
    this.props.store.plusCount({
      id: id,
    });
  }
  onPressMinus(id) {
    this.props.store.extractionCount2({
      id: id,
    });
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.subMain}>
          <TouchableOpacity
            onPress={() =>
              RootNavigation.navigate('Details', {
                title: this.props.title,
                url: this.props.url,
                description: this.props.description,
                id: this.props.id,
                count: this.props.count,
                price: this.props.price,
              })
            }>
            <Image source={{uri: this.props.url}} style={styles.image} />
          </TouchableOpacity>
        </View>
        <Text style={{fontWeight: 'bold'}}>{'₺ ' + this.props.price}</Text>
        <Text>{this.props.title.slice(0, 20) + '...'}</Text>
        <Text style={{opacity: 0.4}}>{this.props.category}</Text>
        <View style={styles.buttonGrub}>
          <TouchableOpacity onPress={() => this.onPressPlus(this.props.id)}>
            <Icon name={'plus'} size={25} style={styles.icon} />
          </TouchableOpacity>
          {this.props.store.productstore
            .filter((x) => x.id == this.props.id)
            .map((item, index) => (
              <Text key={item + index.toString()}>{item.count}</Text>
            ))}
          <TouchableOpacity onPress={() => this.onPressMinus(this.props.id)}>
            <Icon name={'minus'} size={25} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  main: {
    marginTop: 10,
    backgroundColor: colors.productMainBackground,
    padding: 10,
    display: 'flex',
    width: '30%',
    marginLeft: 10,
  },
  subMain: {
    backgroundColor: colors.productImageBackground,
    height: 100,
    width: '98%',
    borderColor: colors.productActiveBorderBackground,
    borderWidth: 2,
    borderRadius: 15,
  },
  buttonGrub: {
    position: 'absolute',
    right: 0,
    backgroundColor: colors.buttonBarBackground,
    alignItems: 'center',
    borderRadius: 5,
    elevation: 6,
  },
  icon: {
    backgroundColor: colors.plusButtonBackground,
    elevation: 10,
    borderRadius: 7,
    color: colors.plusButtonColor,
  },
});

export default ProductBar;
