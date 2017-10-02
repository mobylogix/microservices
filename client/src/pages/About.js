import React, { Component } from 'react';
import { socketConnect } from 'socket.io-react';
import autoBind from 'react-autobind';

import Header from '../components/Header';

import logo from '../images/logo.svg';
import '../stylesheets/App.css';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    //binding functions
    autoBind(this);
  }

  handleClick() {
    const { socket } = this.props;
    socket.emit('PAGE', 'This is Mobylogix about page');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">About</h1>
        </header>
        <Header />
        <button onClick={this.handleClick}>Click Here</button>
      </div>
    );
  }
}

export default socketConnect(About);
/**
 * Created by asveloper on 10/1/17.
 */
