import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login'



function App() {

return (
  <div className="App"> 

<nav> 
<ul>
  <li><Link to="/Home">Home</Link> </li>
  <li><Link to="/About">About</Link> </li>
  <li><Link to="/Contact">Contact</Link> </li>
  <li><Link to="/Login">Login</Link></li>
  </ul>
      </nav>
  <div className="homeComponent">

  <Switch>

  <Route path="/about">

<About/>
  </Route>

{/* my contact page  */}

  <Route path="/contact">

<Contact/>
  </Route>

{/* 
  My LoginPage */}
<Route path="/Login">

<Login/>
  </Route>

  <Route path="/">

{/* my home page */}
<Home/>
  </Route>
  </Switch>
  </div>

  </div>
);

}
export default App;
