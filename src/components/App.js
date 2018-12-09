import React, { Component } from 'react';
import UrlInput from './UrlInput';
import withRoot from '../withRoot';
import { decode } from '../decode';

// TODO create a table/array to encode tree symbols with unicode subset
class App extends Component {

  render() {
    const { search } = window.location;
    if(search && search.length > 0) {
      const payload = decodeURIComponent(search.substr(1));
      decode(payload);
      return <h1>decoded</h1>
    } else {
      return (
        <UrlInput />
      );
    }
  }
}


export default withRoot(App);
