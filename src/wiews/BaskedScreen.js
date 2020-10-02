import {Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import {inject, observer} from 'mobx-react';
import Header from '../components/Header';
import Product from '../components/Product';

@inject('store')
@observer
class BaskedScreen extends React.Component {
  render() {
    return (
      <View>
        <Header name={'Sepet'} />

        <ScrollView style={{marginBottom: 80}}>
          {this.props.store.productstore.map((item, index) => (
            <View
              key={index}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={{uri: item.url}}
                style={{width: 100, height: 100, margin: '3%'}}
              />
              <Text style={{flex:1}}>{item.title}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
export default BaskedScreen;
