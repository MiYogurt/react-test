import React, { Component } from 'react';
import { render } from 'react-dom';
require('expose?$!jquery');

require('sass/global.scss');

class Root extends Component {
  render() {
    return <h1 className="red-text"> Hello World</h1>;
  }
}

render(<Root />, document.getElementById('root1'));



render(<div>Yugo</div>, document.getElementById('root2'));