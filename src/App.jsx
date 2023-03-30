import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Launch from './components/Launch.js'
import Register from './components/Register.js'

const App = () => {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Launch />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
