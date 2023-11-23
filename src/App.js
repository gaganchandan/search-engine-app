import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  Link,
} from "react-router-dom";


import './App.css';
import About from "./About";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
      <>
      <Router>
      <nav>
        <div className="nav-container">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/about">About</Link>
            <Link className="link" to="/login">Login</Link>
            <Link className="link" to="/register">Register</Link>
        </div>
      </nav>
      <Routes>
        <Route exact path = "/" element={ <Home /> } /> 
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element = { <Navigate to = "/" /> } />
      </Routes>
      </Router></>);
}

export default App;
