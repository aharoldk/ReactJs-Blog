import React from 'react';
import logo from './logo.svg';

class Header extends React.Component {
    render(){
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to {this.props.name}</h1>
                <h3>{this.props.title}</h3>
                
            </header>
        )
    }
}
export default Header;