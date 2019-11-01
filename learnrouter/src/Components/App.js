import React from 'react';
import '../Css/App.css';
import Nav from './Nav.js';

import Footer from './Footer';

import {
  BrowserRouter as 
  Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Home';
import News from './News';
import NewsDetail from './NewsDetail';
import Contax from './Contax'


// import {
//   BrowserRouter as Router
// } from "react-router-dom"
function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/tintuc" component={News} />
            <Route path="/tin-chi-tiet">
              <NewsDetail />
            </Route>
            <Route path="/lien-he">
              <Contax />
            </Route> 
        </Switch>
        <Footer/>
      </div> 
    </Router>
  );
}

export default App;

