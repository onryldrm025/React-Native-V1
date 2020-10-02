import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'mobx-react';
import store from './src/store/Mainstore';
import Tabbar from './src/components/Tabbar';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Tabbar />
      </Provider>
    );
  }
}
export default App;
