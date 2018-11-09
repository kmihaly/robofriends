/*import React from 'react';*/
import React, { Component } from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import { robots } from './Robots';

class App extends Component { 

    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    searchChanges = (event) => {
        this.setState({ searchfield: event.target.value });
        
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => { 
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.searchChanges} />
                <Cardlist robots={filteredRobots} />
            </div>
        );
    }
};

/*const App = () => {
    return (
        <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox />
        <Cardlist robots = { robots } />
        </div>
    );
};*/

export default App;