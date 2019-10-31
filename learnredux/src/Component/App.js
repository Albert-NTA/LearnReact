import React, {Component} from 'react';
import '../App.css';
import './User.js'
import User from './User.js';

const users = [{
  id: '001',
  Name: "AAA"
}, {
  id: '002',
  Name: "BBB"
}];


class List extends Component {
  
  render() {
    return  ( <ol>
                {users.map((id) => <li key = {id.id}> <User name={id.Name}/> </li>)}
              </ol>
    )
  }
}
class Title extends Component {
  render() {
      return (
          <h1> User List</h1>
      )
  }
}


class App extends Component {
  render() {
    return (
        <div>
            <Title/>
            <List/>   
        </div>
    )
  }
}
export default App;
