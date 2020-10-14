import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {inject, observer} from 'mobx-react';

function Details(props) {
  const {productstore} = props.store;
  const {description, url, price, title, id, count} = props.route.params;

  function onPressButton(title, url, id, count, price) {
    props.store.addtproduct({
      title: title,
      url: url,
      id: id,
      count: count,
      price: price,
      description: description,
    });
  }

  function onPressPlus(id) {
    props.store.plusCount({
      id: id,
    });
  }
  function onPressMinus(id) {
    props.store.extractionCount2({
      id: id,
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: url}} />
        <Text style={styles.price}> ₺{price}</Text>
        <Text style={styles.title}> {title}</Text>
      </View>
      <View style={styles.description}>
        <Text>{description}</Text>
        <View style={styles.button}>
          {productstore.findIndex((x) => x.id === id) == -1 ? (
            <Button
              title="Sepete Ekle"
              onPress={() =>
                onPressButton(title, url, id, count, price, description)
              }
            />
          ) : (
            productstore
              .filter((x) => x.id == id)
              .map((item, index) => (
                <View
                  key={item + index.toString()}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    backgroundColor: 'orange',
                  }}>
                  <TouchableOpacity onPress={() => onPressPlus(id)}>
                    <Icon name={'plus'} size={32} />
                  </TouchableOpacity>
                  <Text>{item.count}</Text>
                  <TouchableOpacity onPress={() => onPressMinus(id)}>
                    <Icon name={'minus'} size={32} />
                  </TouchableOpacity>
                </View>
              ))
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F0F9',
  },
  header: {flex: 0.1},
  backButton: {
    position: 'absolute',
    zIndex: 2,
    flex: 1,
  },
  backIcon: {
    margin: 13,
    color: 'white',
  },
  imageContainer: {
    marginTop: 32,
    flex: 0.8,
    elevation: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: '80%',
    height: '70%',
    resizeMode: 'contain',
  },
  price: {
    fontSize: 18,
    color: 'orange',
  },
  title: {
    marginTop: 10,
    fontSize: 15,
  },
  description: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    flex: 0.7,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
});
export default inject('store')(observer(Details));
