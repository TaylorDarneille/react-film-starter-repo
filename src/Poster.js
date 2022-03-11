import React, { Component } from 'react';
import './App.css';

class Poster extends Component {
  render() {
    return (
        <img src={this.props.url} alt="" />
    );
  }
}

export default Poster;