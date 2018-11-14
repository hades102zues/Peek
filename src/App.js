import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

/*redux*/
import { createStore, combineReducers } from 'redux';

/*Components*/
import Layout from './Hoc/Layout/Layout.js';
import HomePage from './containers/HomePage/HomePage';
import Login from './components/Login/Login';

const rootReducer = combineReducers({

});

const store = createStore(rootReducer);

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
