import {View, StyleSheet, Modal, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TopProductList from '../wiews/TopProductList';
import {inject, observer} from 'mobx-react';
import * as RootNavigation from '../store/RootNavigation';

const TopTab = createMaterialTopTabNavigator();
@inject('store')
@observer
class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <TopTab.Navigator
          tabBarOptions={{
            scrollEnabled: true,
            indicatorStyle: {
              height: 3,
              bottom: 0,
              backgroundColor: 'red',
            },
          }}>
          {this.props.store.productcatagory.map((item) => {
            return (
              <TopTab.Screen
                key={item}
                name={item}
                component={TopProductList}
              />
            );
          })}
        </TopTab.Navigator>
      </View>
    );
  }
}
export default TopBar;
