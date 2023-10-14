import image from "./demo.jpeg";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Files/Header'
import Home from "./components/Files/Home";
import About from "./components/Files/About";
import Reviews from "./components/Files/Reviews";
import Contact from "./components/Files/Contact";
import Prefooter from "./components/Files/Prefooter";
import Footer from "./components/Files/Footer";

function App() {
  return (
    <div>

      {/* <About/> */}
   <Router>
    <Header/>
    <Switch>


    <Route path="/about"> <About/></Route>
      <Route path="/contact"> <Contact/></Route>
      <Route path="/reviews"> <Reviews/></Route>

      <Route  exact path="/"> <Home/></Route>

    </Switch>
<Footer/>
   </Router>
    </div>
  );
}

export default App;