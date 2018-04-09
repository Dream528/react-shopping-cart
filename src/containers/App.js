import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';


import ShelfContainer from '../components/ShelfContainer';
import FloatCart from '../components/FloatCart';

import store from '../store';



class App extends Component {
  constructor() {
    super();

    this.state = {
      isFloatCartOpen: false
    };

    this.openFloatCart = this.openFloatCart.bind(this);
    this.closeFloatCart = this.closeFloatCart.bind(this);
  }

  openFloatCart() {
    document.body.style.overflow = "hidden";
    this.setState({ isFloatCartOpen: true });
  }

  closeFloatCart() {
    document.body.style.overflow = "initial";
    this.setState({ isFloatCartOpen: false });
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ShelfContainer openFloatCart={this.openFloatCart} />
          <FloatCart
            closeFloatCart={this.closeFloatCart}
            isOpen={this.state.isFloatCartOpen}
          />
        </div>
      </Provider>
    );
  }
}

export default App;
