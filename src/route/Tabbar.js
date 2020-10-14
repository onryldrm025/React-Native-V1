import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import HomeScreen from '../wiews/HomeScreen';
import BaskedScreen from '../wiews/BaskedScreen';
import {inject, observer} from 'mobx-react';
import TopBar from './TopBar';
import {createStackNavigator} from '@react-navigation/stack';
import DetailsScreen from '../wiews/Details';
import prod from '../wiews/ProductListScreen';

import {navigationRef} from '../store/RootNavigation';
import colors from '../consts/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.headerBackground,
        },
        headerTintColor: colors.headerTintColor,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name={'Home'}
        component={HomeScreen}
        options={{
          title: 'Ana Sayfa',
        }}
      />
      <Stack.Screen name={'Details'} component={DetailsScreen} />
    </Stack.Navigator>
  );
}

function BaskedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.headerBackground,
        },
        headerTintColor: colors.headerTintColor,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => (
          <View>
            <Icon name={'shopping-bag'} size={32} style={{marginRight: 10}} />
          </View>
        ),
      }}>
      <Stack.Screen name={'Sepet'} component={BaskedScreen} />
      <Stack.Screen name={'Details'} component={DetailsScreen} />
    </Stack.Navigator>
  );
}
function StarStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.headerBackground,
        },
        headerTintColor: colors.headerTintColor,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name={'Ürünler Listesi'} component={prod} />
      <Stack.Screen name={'Ürünler'} component={TopBar} />
      <Stack.Screen name={'Details'} component={DetailsScreen} />
    </Stack.Navigator>
  );
}

@inject('store')
@observer
class Tabbar extends React.Component {
  render() {
    const MyTheme = {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: colors.appColor,
      },
    };
    return (
      <NavigationContainer theme={MyTheme} ref={navigationRef}>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'plus' : 'plus';
              } else if (route.name === 'Sepet') {
                iconName = focused ? 'shopping-cart' : 'shopping-cart';
              } else if (route.name === 'Ürünler') {
                iconName = focused ? 'star' : 'star';
              }

              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: colors.tabBarActive,
            inactiveTintColor: colors.tabBarUnActive,
          }}>
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen
            name="Sepet"
            component={BaskedStack}
            options={{tabBarBadge: this.props.store.productstore.length}}
          />
          <Tab.Screen name="Ürünler" children={StarStack} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default Tabbar;
