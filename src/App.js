import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'Hold down ⌥ and ⌘, then press the I key',
            // https://defkey.com/what-means/option-command-i
        };
    }

    clearMessage = () => {
        this.setState({
            message: '',
        });
    }

    render() {
        const today = new Date();
        const tabs = today.getHours() % 12 + 1;

        console.log('Hey! Welcome to the developer console.');
        console.log('You can do lots of cool things "under the hood" here. You can write code right below here next to the >');
        console.log('Try typing "window.location.href", then hit enter/return a couple times.');

        console.log('Now type "sayHi()" and then hit enter/return.');
        window.sayHi = () => {
            console.log('Hi!');
            window.explainFunctions();
            this.clearMessage();
        };
        window.explainFunctions = () => {
            console.log('What you just typed was the name of a function');
            console.log('A function is kind of like a preset, but can do almost anything.');
            console.log('A program might have functions that open a file or send an email.');
            console.log('Try typing the same thing but without the () at the end. You should see the "definition" of the function.');
        };
        window.music = () => {
            console.log('So you like music, yes?');
        };

        return (
            <div className="App">
                <header className="App-header">
                    <h1>
                        <span className="grey">{'·'.repeat(4).repeat(tabs)}</span>
                        <span className="red">Nerd</span>
                        <span className="blue">++</span>
                        {/* <span className="light-grey">;</span> */}
                    </h1>
                    {/* <p>Press ⌥ Option + ⌘ Cmd + I</p> */}

                </header>
                <p className="message">{this.state.message}</p>
            </div>
        );
    }
}

export default App;
