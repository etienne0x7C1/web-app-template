import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Modules from "./modules";

import './App.css';

function App() {
  return (
    <BrowserRouter basename={"/"}>
          <Route path="/" component={Modules} />
    </BrowserRouter>
  );
}

export default App;
