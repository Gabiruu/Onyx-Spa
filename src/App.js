import './App.css';
//import NavBar from './compoments/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages';
//import Sidebar from './compoments/Sidebar';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
