import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Home from './components/Homepage/Home';
import Showpackages from './components/Homepage/Showpackages';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Showevents from './components/Homepage/Showevents';
import Footer from './components/Footer';
import Packagesdetails from './components/Package/Packagesdetails';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    
    
    <Router>
      <Header/>
          <div className="container">
              <Switch>
                  <Route exact path="/">
                      <Home/>
                      
                        <div className="title">
                          <h2>Packages</h2>
                        </div>
                        <Showpackages/>
                        <div className="title">
                          <h2>Events</h2>
                        </div>
                        <Showevents/>
                        
                        </Route>
                        <Route exact path="/packages">
                          <Showpackages/>
                        </Route>
                        <Route exact path="/packagedetails/:id">
                          <Packagesdetails/>
                  </Route>
              </Switch>
            </div>
        <Footer/>]
      </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
