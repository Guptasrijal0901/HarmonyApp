import './App.css';
import Header from "./components/Header"
import About from "./components/About"
import { Route , BrowserRouter as Router, Routes } from "react-router-dom"
function App() {
  return (
    <div>
    <Router>
    <Routes>
    <Route  path='/' Component={About}/>
    <Route  path='/start' Component={Header}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
