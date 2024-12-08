import React, {useState} from 'react';
function Basic(){
    
 const[firstname, setFirstName]=useState("");
 const[lastname, setLastName]=useState("");
 const handleChange = (e) => {
    setName(e.target.value);
    };
    return(
 <form>
    <input type ="text" 
value={firstname}
onChange={handleChange}
placeholder ="Type something" /> 
<p> You typed:{firstname}</p>

<input type ="text" 
value={lastname}
onChange={handleChange}
placeholder ="Type something" /> 
<p> You typed:{lastname}</p>
</form>

);
    }
    export default Basic;

    /*const[name, setName]=useState("");
    const handleChange = (e) => {
        setName(e.target.value);
        };
return(
<form>
<input type ="text" 
value={name}
onChange={handleChange}
placeholder ="Type something" /> 
<p> You typed:{name}</p>
</form> */