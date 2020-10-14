import {Text, FlatList, View} from 'react-native';
import React, {useState} from 'react';
import {inject, observer} from 'mobx-react';
import Product from '../components/Product';
import {toJS} from 'mobx';
import ProductBar from '../components/Productbar';
import {SafeAreaView} from 'react-native-safe-area-context';
@inject('store')
@observer
class TopProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.setState({
      data: this.props.store.productFull.filter(
        (item) => item.category === this.props.route.name,
      ),
    });
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

  render() {
    return (
      <View>
        <Text style={{opacity: 0, position: 'absolute'}}>
          {this.props.store.productstore.length}
        </Text>
        <FlatList
          automaticallyAdjustContentInsets={false}
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
        />
      </View>
    );
  }
}
export default TopProductList;
