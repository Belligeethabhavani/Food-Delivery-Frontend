import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './aaaaFoodproject/Foodpro.css';
import './App.css';
import Fplogin from './aaaaFoodproject/Fplogin.js';
import Nav from './aaaaFoodproject/Nav.js';
import Fpordermanagement from './aaaaFoodproject/Fpordermanagement.js';
import Fphome from './aaaaFoodproject/Fphome.js';
import FoodOrdering from './aaaaFoodproject/FoodOrdering.js'
import Register from './aaaaFoodproject/Register.js';
import Payment from './aaaaFoodproject/Payment.js';

import React from 'react';

function App(){
  return(
<div className="body" style={{marginTop:"20px" , color:"#FF7EE2"}} > 
<BrowserRouter>
   <Nav  /> 
   <Routes>
    <Route path='/' element = {<Fphome/>}/>
    <Route path="/login" element = {<Fplogin/>}/>
    <Route path="/register" element = {<Register/>}/>
    <Route path="/ordermanagment" element = {<Fpordermanagement/>}/>
    <Route path="/foodorder" element = {<FoodOrdering/>}/>
    <Route path="/paymentpage" element = {<Payment/>}/>
  
   </Routes>
   </BrowserRouter> 
  
</div>
)
}
export default App;


/*import { useEffect, useState } from 'react';
import './App.css';
function App() {
  const[data,setdata]=useState([]);
  const[name,setname]=useState("");
  const[email,setemail]=useState("");


  useEffect(()=>{ GamepadHapticActuator();},[]);
  return (
    
<div> 
  
</div>

  )
}

export default App; 


*/