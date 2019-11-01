import React, { Component } from 'react';
import '../Css/App.css';
import {
  
  // Switch,
  // Route,
  Link
} from "react-router-dom";




class Nav extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="/">React Router - News</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  {/* <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="tintuc.html">Tin tức</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="chitiet.html">Chi tiết</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="lienhe.html">Liên hệ</a>
                  </li>  */}
                  <li className="nav-item">
                    <Link to="/tintuc" className="nav-link js-scroll-trigger">News</Link>
                  </li>
                  <li>
                    <Link to="/tin-chi-tiet" className="nav-link js-scroll-trigger">Tin chi tiết</Link>
                  </li>   
                  <li>
                    <Link to="/lien-he"className="nav-link js-scroll-trigger">Liên hệ</Link>
                  </li> 
                </ul>
            </div>
          </div>
        </nav>
    )
  }
}

export default Nav;
