import './App.css';
import Header from "./components/Header"
import About from "./components/About"
import { Route , BrowserRouter as Router, Routes } from "react-router-dom"
function App() {
  return (
    <div>
    <Router>
    <Routes>
    <Route  path='/' Component={Header}/>
    <Route  path='/About' Component={About}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
