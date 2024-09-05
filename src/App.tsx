import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './views/login/Login';
import Home from './views/home/Home';
import NotFound from './views/noFound/NotFound';
import './App.css'
import logoBanc from './assets/svgs/logo-banc.svg'; // Ajusta la ruta según sea necesario
import first from './assets/svgs/first.svg'; // Ajusta la ruta según sea necesario
import second from './assets/svgs/second.svg'; // Ajusta la ruta según sea necesario
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  
  const [loginOne, setLoginOne] = useState(false);

  
  
  useEffect(() => {
    
    setTimeout(() => {

      setLoginOne(true)
      
    }, 3000);
    return () => {}
  }, [])
  

  return (
    <>
      {
        !loginOne &&
        <div className="begin">
          <img src={logoBanc} alt="Logo" style={{width:'350px'}}/>
          <img style={{}} className='first' src={first} alt="first" />
          <img style={{}} className='second' src={second} alt="second" />
          <img style={{left:'295px', top:'296px'}} className='first' src={first} alt="third" />          
        </div>
      }
      {
        loginOne &&
      <div className='globalContainer'>
        <div className='bannerHome'>
          {/* <img src={logoBanc} alt="Logo" className='fixImg'/>
          <div style={{ alignItems:'end', display: 'flex', justifyContent: 'space-around', width: '150px' }}>
              <i className="bi bi-bell" style={{ fontSize: '20px', marginLeft:'6px' }}></i>
              <i className="bi bi-question-circle" style={{ fontSize: '20px' }}></i>
              <i className="bi bi-whatsapp" style={{ fontSize: '20px', marginRight:'2px' }}></i>
          </div> */}
        </div>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            {/* Ruta para páginas no encontradas */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        {/* <div className='footer'>
          <div className="iconFooter">
            <i className="bi bi-house-door" style={{ fontSize: '20px' }}></i>
            <p className='textIconFooter'>Inicio</p>
          </div>
          <div className="iconFooter">
            <i className="bi bi-credit-card-2-front" style={{ fontSize: '20px' }}></i>
            <p className='textIconFooter'>Transacciones</p>
          </div>
          <div className="iconFooter">
            <i className="bi bi-grid" style={{ fontSize: '20px' }}></i>
            <p className='textIconFooter'>Explorar</p>
          </div>
          <div className="iconFooter">
            <i className="bi bi-journal-text" style={{ fontSize: '20px' }}></i>
            <p className='textIconFooter'>Trámites y solicitudes</p>
          </div>
          <div className="iconFooter">
            <i className="bi bi-gear" style={{ fontSize: '20px' }}></i>
            <p className='textIconFooter'>Ajustes</p>
          </div>
        </div> */}
        
      </div>
      }
    </>
  );
}

export default App
