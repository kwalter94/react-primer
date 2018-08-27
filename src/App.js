import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './Product';

export default class  App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Header />
          <Products />
        <Footer />
      </React.Fragment>
    )
  }

}