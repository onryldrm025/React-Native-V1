import {observable, action} from 'mobx';

class Mainstore {
  @observable productstore = [];
  @action addtproduct(product) {
    this.productstore = [...this.productstore, product];
  }
}
const store = new Mainstore();
export default store;
