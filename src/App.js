
import {BrowserRouter,Routes,Route }from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import Navbar from './components/inc/Navbar';
import Footer from './components/inc/Footer';




function App() {
  
  return (
    <>
    <div>
      <Navbar/>
    </div>
   
  
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/Register' element={<Register/>}></Route>
    </Routes>
    </BrowserRouter>

    <div>
      <Footer/>
    </div>
    </>
  );
}

export default App;
