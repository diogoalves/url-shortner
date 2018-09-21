import React, { Component } from 'react';
import UrlInput from './UrlInput';
import withRoot from '../withRoot';

// TODO create a table/array to encode tree symbols with unicode subset
// TODO /xxxx to redirect to decoded 
class App extends Component {



  render() {
    return (
      <UrlInput />
    );
  }
}


export default withRoot(App);
