import React,{useState,useEffect} from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './pages/About'
//import         
import Cart from './components/cartItems/index' 
import Home from "./pages/Home";
import Dropdown from "./components/Dropdown";
import Footer from "./pages/Footer";
import NotFound from "./pages/NotFound";
function App() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle =()=>{
        setIsOpen(!isOpen)
    }
    useEffect(() => {
      const hideMenuSize=()=>{
        if(window.innerWidth <500 && isOpen){
          setIsOpen(false)
          console.log("i resized",hideMenuSize);
        }
        window.addEventListener('resize',hideMenuSize)
      }
      return ()=> window.removeEventListener('resize',hideMenuSize)
    });
  return (
    <Router>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/store" component={Products} />
        <Route path="/cart" component={Cart} />
        <Route path="*" exact={true} component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
