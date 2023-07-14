import Plogo from './components/Plogo.png';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/Signup';
import Services from './components/Services';
import Bookings from './components/Bookings';
import Quotation from './components/Quotation';
import Singleservice from './components/Singleservice';
import Quotationcreate from './components/Quotationcreate';


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/bookings" element={<Bookings/>}/>
      <Route path="/quotation" element={<Quotation/>}/>
      <Route path="plogo" element={<Plogo.png/>}/>
      <Route path="singleservice" element={<Singleservice/>}/>
      <Route path="quotationcreate" element={<Quotationcreate/>}/>


    </Routes>
   </BrowserRouter>
  );
}

export default App;
