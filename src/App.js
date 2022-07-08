import './App.css';
import HomePage from './pages/Home.js';
import {Router, Routes, Route, Link } from "react-router-dom";
import Account from './pages/CreateAccount'

function App() {
  return (
    <div>
      <HomePage>
      <Router>
        <div>
            <Routes path="/">
              <Route path="SignIn">
                <HomePage/>
              </Route>
              <Route path='CreateAccount'>
                  <Account/>
                </Route>
            </Routes>
        </div>
      </Router>
      </HomePage>
    </div>
  );
}

export default App;
