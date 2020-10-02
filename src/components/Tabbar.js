import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import HomeScreen from '../wiews/HomeScreen';
import BaskedScreen from '../wiews/BaskedScreen';
import {inject, observer} from 'mobx-react';

const Tab = createBottomTabNavigator();

@inject('store')
@observer
class Tabbar extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'plus' : 'plus';
              } else if (route.name === 'Sepet') {
                iconName = focused ? 'shopping-cart' : 'shopping-cart';
              }

              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'orange',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen
            name="Sepet"
            component={BaskedScreen}
            options={{tabBarBadge: this.props.store.productstore.length}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: '5%',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Tabbar;
