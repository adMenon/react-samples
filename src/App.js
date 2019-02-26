import React,{ Component } from 'react';
import Cardlist from './Cardlist';
import {robots} from './Robots'
import Searchbox from './Searchbox'
import Scroll from './Scroll'

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({searchfield : event.target.value})
    }
    render(){
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <Searchbox searchchange={this.onSearchChange}/>
                <Scroll>
                    <Cardlist robots = {filterRobots}/> 
                </Scroll>
                
            </div>
        );
    }
    
}

export default App;