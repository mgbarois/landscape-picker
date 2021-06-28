import React from 'react';
import './Hello.css';

class Hello extends React.Component {
  render() {
    return (
        <div className="f1 tc">
        <h1>Hello World!</h1>
        <p>{this.props.greeting}</p>
        </div>
    ); //parentheses necessary if you're writing more than one jsx element
  }
}

export default Hello;
//default is used when you're only returning one component.