import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function tick() {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

setInterval(tick, 1000)