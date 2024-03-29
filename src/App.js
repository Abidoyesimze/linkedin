 import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
 import Header from './components/Header';
 import Home from './components/Home'
 import './App.css';
 import Login from "./components/Login";

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
     </Router>
      
    </div>
  );
}

export default App;
