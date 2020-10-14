import {observable, action} from 'mobx';

class MainStore {
  @observable productstore = [];
  @action addtproduct(product) {
    let a = this.productstore.find((item) => item.id == product.id);
    if (a) {
      a.count++;
    } else {
      this.productstore = [...this.productstore, product];
    }
    this.updatetotal();
  }
  @action plusCount(product) {
    let a = this.productstore.find((item) => item.id == product.id);
    a.count++;
    this.updatetotal();
  }
  @action extractionCount(product) {
    let a = this.productstore.find((item) => item.id == product.id);
    if (a.count != 1) {
      a.count--;
    }

    this.updatetotal();
  }
  @action extractionCount2(product) {
    let a = this.productstore.find((item) => item.id == product.id);
    if (a.count != 1) {
      a.count--;
    } else {
      this.productstore = this.productstore.filter(
        (item) => item.id !== product.id,
      );
    }

    this.updatetotal();
  }
  @action removeProduct(product) {
    this.productstore = this.productstore.filter(
      (item) => item.id !== product.id,
    );
    this.updatetotal();
  }
  @observable totel = 0;
  @action updatetotal() {
    this.totel = 0;
    this.productstore.map(
      (element) => (this.totel += Number(element.price * element.count)),
    );
  }
  @action getProduct(product) {
    let a = this.productstore.filter((item) => item.id === product.id);
    let c = a.map((element) => Number(element.count));
    return parseInt(c);
  }
  @observable productcatagory = [];
  @action addtcatagory(catagory) {
    this.productcatagory = [...this.productcatagory, catagory];
  }
  @observable productFull = [];
  @action addproductfull(product) {
    this.productFull = product;
  }
}
const store = new MainStore();
export default store;
