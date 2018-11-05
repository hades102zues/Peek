import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';




/*Components*/
import Layout from './Hoc/Layout/Layout.js';
import HomePage from './containers/HomePage/HomePage';
import Login from './components/Login/Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
	       <Layout> 
	          <Route path="/" exact component={HomePage} />
	          <Route path="/login" component={Login} />
	       </Layout>
      </BrowserRouter>
      
    );
  }
}

export default App;
