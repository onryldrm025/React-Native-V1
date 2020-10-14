import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';

import {inject, observer} from 'mobx-react';
import Catagory from '../components/Catagory';
import {toJS} from 'mobx';

@inject('store')
@observer
class ProductListScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItem = ({item}) => {
    return <Catagory item={item} navigation={this.props.navigation} />;
  };
  render() {
    const {navigation} = this.props;
    return (
      <FlatList
        automaticallyAdjustContentInsets={false}
        data={toJS(this.props.store.productcatagory)}
        renderItem={this.renderItem}
        keyExtractor={(item) => item}
        numColumns={3}
      />
    );
  }
}

export default ProductListScreen;
