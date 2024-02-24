import './App.css'
import {BrowserRouter as Router, Routes,Route, Link} from "react-router-dom";
import Signup from './components/LoginSignup/Signup';
import Login from './components/LoginSignup/Login';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
