import React, { Component } from 'react';

class App extends Component {

    display = () => {
        let list = [];

        for (let index = 0; index < 8; index++) {
            list.push(
                <p>RATTATAE</p>
            )
        }

        return list;
    }

    render() {
        return (
            <div>
                {this.display()}
            </div>
        );
    }
}

export default App;