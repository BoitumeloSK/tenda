import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/Signup';
import Services from './components/Services';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/services" element={<Services/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
