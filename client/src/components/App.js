import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from './layout/nav'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
