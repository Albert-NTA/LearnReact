import React, {Component} from 'react';
import '../App.css';

const users = [{
  id : "1",
  name: "A"
}, {
  id: '2',
  name: 'B'
}];
class List extends Component {
  
  render() {
    return  ( <ol>
                {users.map((id, name) => <li key = {id.id}> Name: {id.name} </li>)}
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
