
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
import Uttrakhand from './Uttrakhand.jsx';
import Sikkim from './Sikkim.jsx';
import Goa from './Goa.jsx';
import AP from './AP.jsx';
import Meghalaya from './Meghalaya.jsx';
import Assam from './Assam.jsx';
import Pondicherry from './Pondicherry.jsx';
import Punjab from './Punjab.jsx';
import Itinerary from './Itinerary.jsx';
import { Iti } from './Iti.jsx';

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
      <Route path='/u' element={<Uttrakhand/>}/>
      <Route path ='/s' element={<Sikkim/>}/>
      <Route path ='/goa' element ={<Goa/>}/>
      <Route path='/ap' element={<AP/>}/>
      <Route path='/megha'element={<Meghalaya/>}/>
      <Route path='/assam' element={<Assam/>}/>
      <Route path='/pondi' element={<Pondicherry/>}/>
      <Route path='/punjab' element={<Punjab/>}/>
      <Route path='/form' element={<GetTravelForm/>}/>
      <Route path='/phalgam' element={<Phalgam/>}/>
      <Route path='itinerary' element={<Iti/>}/>

    </Routes>
    </Auth0Provider>
  </BrowserRouter>
);
