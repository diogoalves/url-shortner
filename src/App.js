import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// TODO selected unicode subset
// TODO create a huffman tree list from my webhistory links or hackernews links
// TODO create a table/array to encode tree symbols with unicode subset
// TODO make / with a screen to encode
// TODO /encode/:xxxx to encode xxx
// TODO /:xxxx to redirect to decoded 
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          
          {String.fromCharCode(41)}
        </p>
      </div>
    );
  }
}

/*

for(i=0;i<65536;i++) {
    console.log(i.toString(16))
}

*/



export default App;
