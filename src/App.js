import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout'
import BurguerBuilder from './containers/BurguerBuilder/BurguerBuilder';
function App() {
  return (
    <div className="App">
      <Layout>
        <BurguerBuilder/>        
      </Layout>  
    </div>
  );
}

export default App;
