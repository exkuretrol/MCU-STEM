import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import About from './routes/About';
import Education from './routes/Education';
import Contest from './routes/Contest';
import Platform from './routes/Platform';
import StemReport from './routes/StemReport';
import Home from './routes/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='education' element={<Education />} />
        <Route path='contest' element={<Contest />} />
        <Route path='platform' element={<Platform />} />
        <Route path='stemreport' element={<StemReport />} />
        <Route path='*' element={
          <main>
            <p>錯誤</p>
          </main>
        }/>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
