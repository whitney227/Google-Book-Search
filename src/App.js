import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

// import './App.css';

const App = () => {
  return (
    <Router>
    <div>
      <Nav />
      <Wrapper>

      </Wrapper>
      <Footer />
    </div>
  </Router>  
  );
}

export default App;

