import React, { Component } from 'react';
import { Actions, Field, Timeline } from 'components';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Actions />
        <Field />
        <Timeline />
      </div>
    );
  }
}

export default App;
