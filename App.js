import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'mobx-react';
import store from './src/store/Mainstore';
import TabBar from './src/route/Tabbar';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TabBar />
      </Provider>
    );
  }
}
export default App;
