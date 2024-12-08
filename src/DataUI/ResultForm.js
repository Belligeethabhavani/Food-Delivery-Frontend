import { Button, FormControl, InputLabel, MenuItem, Paper, Select, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import TableStack from './TableStack';


function ResultForm() {
const [regno,setRegNo] = useState("");
const[year, setYear] = useState("");
const[sem , setSem] = useState("");
const[result, setResults] = useState("");
const [data,setData]=useState([]);

const handleDataStore=()=>{
    setData([...data,{regno,year,sem,result}]);
    console.log("data",data)
}

  return (
<div>
<center>
<Stack direction="row" spacing={5} >
<Paper elevation={12} style={{ width:"450px ",padding:"35px"  }}>
<Stack gap={3}  space={2}>
<TextField value={regno} onChange={(e)=>{
    setRegNo(e.target.value)
}} variant="outlined" label =" Enter RegNo" ></TextField>
<FormControl>
    <InputLabel> year </InputLabel>
    <Select  onChange={(e)=>{setYear(e.target.value)}}>
        <MenuItem value={1}> 1 </MenuItem>
        <MenuItem value={2}> 2 </MenuItem>
        <MenuItem value={3}> 3 </MenuItem>
        <MenuItem value={4}> 4 </MenuItem>
    </Select> 
</FormControl>
<FormControl>
    <InputLabel > Sem </InputLabel>
    <Select  onChange={(e)=> {setSem(e.target.value)}}>
        <MenuItem value={1}> ODD </MenuItem>
        <MenuItem value={2} > EVEN </MenuItem>
    </Select>
   
</FormControl>
<TextField value={result} onChange={(e)=>{setResults(e.target.value)} } varient ="filled" label ="Enter the CGPA"></TextField>
<Button varient="contained" onClick={handleDataStore}> Post Results</Button>
           </Stack>
          
</Paper>
<TableStack data={data}/>
</Stack>
</center>
    </div>
  )
}
export default ResultForm
/* in APP.JS


import { BrowserRouter, Routes,Route } from 'react-router-dom';
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