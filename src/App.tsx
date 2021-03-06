import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Catalogue from './pages/Catalogue';
import Register from './pages/Register';
import MainPage from './pages/MainPage';
import AboutUs from './pages/AboutUs';



function App() {
  return (
    <div className="App">
      <Router>
        
        <Navbar title="Lucky's Market"/>
        
        <Switch>
          <Route path="/Contact">
            <Contact />
          </Route>

          <Route path="/Catalogue">
            <Catalogue />
          </Route>

          <Route path="/AboutUs">
            <AboutUs />
          </Route>
          
          <Route path="/Register">
            <Register />
          </Route>

          <Route path="/">
            <MainPage />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
