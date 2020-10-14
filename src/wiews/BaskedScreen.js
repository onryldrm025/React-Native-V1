import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {inject, observer} from 'mobx-react';


import Icon from 'react-native-vector-icons/Feather';
import * as RootNavigation from '../store/RootNavigation';

@inject('store')
@observer
class BaskedScreen extends React.Component {
  onPressPlus(id) {
    this.props.store.plusCount({
      id: id,
    });
  }
  onPressMinus(id) {
    this.props.store.extractionCount({
      id: id,
    });
  }
  onPressButtonRemove(id) {
    this.props.store.removeProduct({
      id: id,
    });
  }
  render() {
    return (
      <View>
        <ScrollView style={styles.scrollViewS}>
          <View
            style={{
              backgroundColor: '#f4511e',
              borderBottomEndRadius: 30,
              borderBottomStartRadius: 30,
              flex:1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.totalText}>
              Toplam: {this.props.store.totel.toFixed(2)}
            </Text>
          </View>

          {this.props.store.productstore.map((item, index) => (
            <View key={index}>
              <View style={styles.container}>
                <View style={styles.box}>
                  <View style={styles.viewImage}>
                    <TouchableOpacity
                      onPress={() =>
                        RootNavigation.navigate('Details', {
                          title: item.title,
                          url: item.url,
                          description: item.description,
                          id: item.id,
                          count: item.count,
                          price: item.price,
                        })
                      }>
                      <Image
                        style={{
                          width: '100%',
                          height: '100%',
                          resizeMode: 'contain',
                        }}
                        source={{
                          uri: item.url,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.viewBody}>
                    <View style={styles.productTitle}>
                      <Text>{item.title.slice(0, 30) + '..'}</Text>
                    </View>
                    <View style={styles.productProperty}>
                      <View style={styles.viewProduct}>
                        <View style={styles.textPrice}>
                          <Text>₺{item.price}</Text>
                        </View>
                        <View style={styles.buttonPlusMinusCount}>
                          <TouchableOpacity
                            onPress={() => this.onPressMinus(item.id)}>
                            <Icon name={'minus'} size={32} />
                          </TouchableOpacity>
                          <Text>{item.count}</Text>
                          <TouchableOpacity
                            onPress={() => this.onPressPlus(item.id)}>
                            <Icon name={'plus'} size={32} />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.buttonRemove}>
                    <TouchableOpacity
                      onPress={() => this.onPressButtonRemove(item.id)}>
                      <Icon name={'trash-2'} size={26} color={'red'} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  scrollViewS: {
    marginTop: 0,
  },
  box: {
    height: 100,
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    borderColor: '#eee',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 15,
    marginHorizontal: 5,
  },
  viewImage: {
    margin: 5,
    flex: 1,
  },
  viewBody: {
    margin: 5,
    flex: 2,
  },
  productTitle: {
    margin: 5,
    flex: 1,
    alignItems: 'center',
  },
  productProperty: {
    margin: 5,
    flex: 2,
  },
  viewProduct: {
    margin: 5,
    flex: 1,
    flexDirection: 'row',
  },
  textPrice: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPlusMinusCount: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonRemove: {
    flex: 0.3,
    justifyContent: 'center',
  },
  totalText: {
    color: 'white',
    fontSize: 25,
  },
});

export default BaskedScreen;
