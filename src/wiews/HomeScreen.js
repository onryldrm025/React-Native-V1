import {Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import Product from '../components/Product';
import ProductBar from '../components/Productbar';
import {SafeAreaView} from 'react-native-safe-area-context';
import {inject, observer, Observer} from 'mobx-react';
import {toJS} from 'mobx';
import * as RootNavigation from '../store/RootNavigation';
import colors from '../consts/colors';

@inject('store')
@observer
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  renderItem = ({item}) => {
    return this.props.store.productstore.findIndex((x) => x.id === item.id) ===
      -1 ? (
      <Product
        url={item.image}
        title={item.title}
        id={item.id}
        count={1}
        price={item.price}
        category={item.category}
        description={item.description}
      />
    ) : (
      <ProductBar
        url={item.image}
        title={item.title}
        id={item.id}
        count={1}
        price={item.price}
        category={item.category}
        description={item.description}
      />
    );
  };

  componentDidMount() {
    const url = 'https://fakestoreapi.com/products';
    fetch(url)
      .then((response) => response.json())
      .then((respnseJson) => {
        respnseJson.map((item) => {
          if (this.props.store.productcatagory.indexOf(item.category) === -1) {
            this.props.store.addtcatagory(item.category);
          }
        });

        this.props.store.addproductfull(respnseJson);
      })
      .catch((eror) => {
        console.log('Bağlantı Hatası');
      });
  }

  render() {
    return (
      <SafeAreaView>
        <Text style={{opacity: 0, position: 'absolute'}}>
          {this.props.store.productstore.length}
        </Text>
        <FlatList
          automaticallyAdjustContentInsets={false}
          data={toJS(this.props.store.productFull)}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
        />
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
