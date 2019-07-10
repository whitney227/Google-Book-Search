import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
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
        <Route exact path="/" component={Search} />
        <Route exact path="/books" component={Search} />
        <Route exact path="/books:id" component={Saved} />
      </Wrapper>
      <Footer />
    </div>
  </Router>  
  );
}

export default App;

