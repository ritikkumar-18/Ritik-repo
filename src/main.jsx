
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import { JK } from './JK.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
  
//   <Routes>
//   <Route path ='/' element={<App/>}/>
      
//       <Route path ='/jk' element={<JK/>}/>
//     </Routes>
//     <App/>
  
//   </BrowserRouter>
  

// )
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { JK } from './JK.jsx';
import Lahoreimport from './Lahoreimport.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import K from './K.jsx';
import R from './R.jsx';
import AN from './AN.jsx';
import GetTravelForm from './GetTravelForm.jsx';
import Phalgam from './Phalgam.jsx';
import Himachal from './Himachal.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Auth0Provider
    domain="dev-rrsm82fjkli4jofw.uk.auth0.com"
    clientId="o9tEUGoWt37gTVX0uU89nxGkd9x58VCc"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
 
    <Routes>
    
      <Route path="/" element={<App />} />
      <Route path="/jk" element={<JK />} />
      <Route path="/lahore" element={<Lahoreimport/>}/>
      <Route path='/kerala' element={<K/>}/>
      <Route path='/rajasthan' element={<R/>}/>
      <Route path='/an'element={<AN/>}/>
      <Route path='/h' element={<Himachal/>}/>
      <Route path='/form' element={<GetTravelForm/>}/>
       <Route path='/an/form' element={<GetTravelForm/>}/>
      <Route path='jk/form' element={<GetTravelForm/>}/>
      <Route path='lahore/form' element={<GetTravelForm/>}/>
      <Route path='rajasthan/form' element={<GetTravelForm/>}/>
      <Route path='/form' element={<GetTravelForm/>}/> 
      <Route path='phalgam/form' element={<GetTravelForm/>}/>
      <Route path='/phalgam' element={<Phalgam/>}/>

    </Routes>
    </Auth0Provider>
  </BrowserRouter>
);
