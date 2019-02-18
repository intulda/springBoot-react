import React, {Component} from 'react';
import logo from './logo.svg';
//mport './App.css';
import TestComponents from "./components/TestComponents";
import { hot } from 'react-hot-loader'

class App extends Component {
    state = {};

    componentDidMount() {
        //setInterval(this.hello, 250);
    }

    hello = () => {
        fetch('/api/hello')
            .then(response => response.text())
            .then(message => {
                this.setState({message: message});
            });
    };

    render() {
        return (
            <div className="App">
                <TestComponents/>
                <div>
                    {this.state.message}
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.111122333333
                </p>
            </div>
        );
    }
}

export default hot(module) (App);
