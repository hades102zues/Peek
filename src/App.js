import React, { Component } from 'react';
import './App.css';




/*Components*/
import Layout from './Hoc/Layout/Layout.js';
import HomePage from './components/HomePage/HomePage';

class App extends Component {
  render() {
    return (

       <Layout> 
          <HomePage />
       </Layout>
      
    );
  }
}

export default App;
