import React from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './pages/About'
//import         
import Cart from './pages/cartItems/index' 
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route path='/about' component={About}/>
      <Route path='/products' component={Products}/>
      <Route path='/cart' component={Cart}/>
      </Switch>
    
    </Router>
  );
}

export default App;
