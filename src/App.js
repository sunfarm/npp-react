import React, { Component } from 'react';
import './App.css';

class App extends Component {
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
                    </h1>
                </header>
            </div>
        );
    }
}

export default App;
