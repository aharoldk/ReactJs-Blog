import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Body from './Body';
import ListMantan from './ListMantan'; //import javascript file ListMantan

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      name: "www.aharoldk.com",
      title: "List Mantan",
      daftar: []
    }
  }

  saveStateMantan(nama, umur) {
    const mantan = {nama, umur};
    const daftar = this.state.daftar;

    daftar.push(mantan);
    this.setState({daftar}); 
  }

  render() {
    return (
      <div className="App">
        <Header name={this.state.name} title={this.state.title}/>
        <Body saveStateMantan={this.saveStateMantan.bind(this)} />
        <ListMantan list={this.state.daftar} />
      </div>
    );
  }
}

export default App;
