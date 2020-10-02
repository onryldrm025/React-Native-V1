import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Product from '../components/Product'
import {SafeAreaView} from 'react-native-safe-area-context';
import {inject, observer} from 'mobx-react';
@inject('store')
@observer
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datasource: [],
    };
  }
  onPressButton(title) {
    console.log('Ekelendi');
    this.props.store.deneadd();
  }
  renderItem = ({item}) => {
    return <Product url={item.image} title={item.title} id={item.id} />;
  };

  componentDidMount() {
    const url = 'https://fakestoreapi.com/products';
    fetch(url)
      .then((response) => response.json())
      .then((respnseJson) => {
        this.setState({
          datasource: respnseJson,
        });
      })
      .catch((eror) => {
        console.log('Bağlantı Hatası');
      });
  }

  render() {
    return (
      <SafeAreaView>
        <Header name={'App Bar'} />

        <FlatList
          data={this.state.datasource}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id.toString()}
          style={{marginBottom: 80}}
        />
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  container: {},
});

export default HomeScreen;
