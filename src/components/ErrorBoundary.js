import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false //create a property
        }
    }
    //new lifecycle method in react 16
    componentDidCatch(error, info) { // like try/catch
        this.setState({hasError:true})
    }
    render() {
        if (this.state.hasError) {
            return <h1>Oops. That is not good.</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;