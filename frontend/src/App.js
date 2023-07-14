import Plogo from './components/Plogo.png';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/Signup';
import Services from './components/Services';
import Quotation from './components/Quotation';
import Singleservice from './components/Singleservice';
import Quotationcreate from './components/Quotationcreate';
import Quotationlist from './components/Quotationlist';
import Quotationview from './components/Quotationview';
import Servicerequest from './components/Servicerequest';
import Successfulbid from './components/successfulbid';
import Servicequotationview from './components/Servicequotationview';





function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/servicerequest" element={<Servicerequest/>}/>
      <Route path="/quotation" element={<Quotation/>}/>
      <Route path="plogo" element={<Plogo.png/>}/>
      <Route path="singleservice" element={<Singleservice/>}/>
      <Route path="quotationcreate" element={<Quotationcreate/>}/>
      <Route path="quotationlist" element={<Quotationlist/>}/>
      <Route path="quotationview" element={<Quotationview/>}/>
      <Route path="successfulbid" element={<Successfulbid/>}/>
      <Route path="servicequotationview" element={<Servicequotationview/>}/>
      

    </Routes>
   </BrowserRouter>
  );
}

export default App;
