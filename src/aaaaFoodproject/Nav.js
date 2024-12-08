import { AppBar, Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
function Nav(){
    return(
<div  style={{marginTop:"75px"}} >
    <AppBar>
        <Toolbar>
        <Button color="inherit" component={Link} to ="/">
                HOME
            </Button> 
            <Button color="inherit" component={Link} to ="/login">
                LOGIN
            </Button>
          <Button color="inherit" component = {Link} to ="/register">
                REGISTER
            </Button>
            <Button color="inherit" component={Link} to ="/ordermanagment">
            ORDER MANAGMENT
            </Button>
            <Button color="inherit" component={Link} to ="/foodorder">
            FOOD ORDERING
            </Button> 
            <Button color="inherit" component={Link} to ="/paymentpage">
            PAYMENT
            </Button> 
           
        </Toolbar>
    </AppBar>
</div>
    )
}
export default Nav;

 /*
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './aaaaFoodproject/Foodpro.css';
import './App.css';
import Fplogin from './aaaaFoodproject/Fplogin.js';
import Nav from './aaaaFoodproject/Nav.js';
import Fpordermanagement from './aaaaFoodproject/Fpordermanagement.js';
import Fphome from './aaaaFoodproject/Fphome.js';
import FoodOrdering from './aaaaFoodproject/FoodOrdering.js'
import Register from './aaaaFoodproject/Register.js';



<div className="body" style={{marginTop:"75px"}} > 
<BrowserRouter>
   <Nav/> 
   <Routes>
    <Route path='/' element = {<Fphome/>}/>
    <Route path="/login" element = {<Fplogin/>}/>
    <Route path="/register" element = {<Register/>}/>
    <Route path="/ordermanagment" element = {<Fpordermanagement/>}/>
    <Route path="/foodorder" element = {<FoodOrdering/>}/>
   </Routes>
   </BrowserRouter> 
  
</div>
*/