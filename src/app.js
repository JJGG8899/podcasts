import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Featured } from './components';

class App extends Component {
  render(){
    return (
      <div>
        hello React;
        <Featured />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
