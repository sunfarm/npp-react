import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
          showSnippet: false,
          output: ''
        }
    }

    out = (text) => {
        console.log(text);
        this.setState({
            output: `${this.state.output}\n${text}` ,
        });
        window.scrollTo(0,document.body.scrollHeight);

    }

    componentDidMount = () => {
        console.log("Welcome to the Nerd++ site!");

        window.out = this.out;

        window.hello = () => {
            this.out("Hi!");
        }

        window.snip = () => {
            this.setState({
                showSnippet: true
            });
        }

        window.tip = () => {
            this.out('Here is a helpful tip');
        }
    }

    render() {
        const today = new Date();
        const tabs = today.getHours() % 12 + 1;
        return (
            <div className="App">
                <header className="App-header">
                    <h1>
                        <span className="grey">{'·'.repeat(4).repeat(tabs)}</span>
                        <span className="red">Nerd</span>
                        <span className="blue">++</span>
                        {/* <span className="light-grey">;</span> */}
                        { this.state.showSnippet ? <pre className="light-grey">This will be a useful code snippet</pre> : ''}
                        { this.state.output ? <pre className="light-grey">{this.state.output}</pre> : ''}
                    </h1>
                </header>
            </div>
        );
    }
}

export default App;
