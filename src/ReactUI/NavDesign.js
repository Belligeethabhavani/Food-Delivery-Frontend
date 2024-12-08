import { AppBar, Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

function NavDesign(){
    return(
<div>
    <AppBar>
        <Toolbar>
            
            <Button color="inherit" component={Link} to ="/">
                HOME
            </Button>
            <Button color="inherit" component = {Link} to ="/products">
                PRODUCTS
            </Button>
            <Button color="inherit" component={Link} to ="/details">
                DETAILS
            </Button>
        </Toolbar>
    </AppBar>
</div>
    )
}
export default NavDesign;

/*import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import NavDesign from './ReactUI/NavDesign';
import StudentHome from './ReactUI/StudentHome';
import StudentProfile from './ReactUI/StudentProfile';
import StudentResults from './ReactUI/StudentResults';

function App() {
  return (
    
<div> 
   
   <BrowserRouter>
   <NavDesign/>
   <Routes>
    <Route path="/" element = {<StudentHome/>}/>
    <Route path="/profile" element = {<StudentProfile/>}/>
    <Route path="/results" element = {<StudentResults/>}/>
   </Routes>
   </BrowserRouter>
</div>

  )
}

export default App; 
*/