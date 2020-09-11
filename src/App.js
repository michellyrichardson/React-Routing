import React from 'react';
import './App.css';
import Home from './components/Home';
import Input from './components/Input';
import Colors from './components/Colors';

import { Router } from '@reach/router';

function App() {

  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <Input path="/:value"/>
        <Colors path="/:value/:backgroundColor/:color"/>
      </Router>
    </div>
  );
}
export default App;
