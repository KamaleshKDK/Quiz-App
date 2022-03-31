import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import Start from './components/Start';
import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Start />} />
    <Route path="/quiz" element={<Main />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App