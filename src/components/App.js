import React, { Component } from 'react';
import UrlInput from './UrlInput';
import withRoot from '../withRoot';

// TODO create a table/array to encode tree symbols with unicode subset
class App extends Component {

  render() {
    const { search } = window.location;
    if(search && search.length > 0) {
      window.location.href = 'http://www.google.com'
    } else {
      return (
        <UrlInput />
      );
    }
  }
}


export default withRoot(App);
