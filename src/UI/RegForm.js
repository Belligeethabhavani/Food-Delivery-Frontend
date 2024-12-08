import React, { useState } from 'react';
import RegformDisplay from './RegformDisplay';

function RegForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [data, setData] = useState([]);

  const handleData = () => {
    
    setData([...data, { name, phone, gender }]);
    console.log("Data Array", [...data, { name, phone, gender }]);
  };

  return (
    <div>
      <h1>Registration form</h1>
      <table>
        <tr>
          <td>
            <label htmlFor="name">Name</label>
          </td>
          <td>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="Enter your name"
            />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="phone">Phone</label>
          </td>
          <td>
            <input
              type="text"
              onChange={(e) => setPhone(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>Gender</td>
          <td>
            <select
              name="gender"
              id="gender"
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </td>
          <td>
            <button onClick={handleData}>Submit</button>
          </td>
        </tr>
      </table>
      <RegformDisplay data={data} />
    </div>
  );
}

export default RegForm;



/*import RegformDisplay from './RegformDisplay';
import React, {useState} from 'react';
function RegForm(){
    const[name,setName]=useState( );
    const[phone,setPhone]=useState( );
    const[gender,setGender]=useState( );
    const[data,setData]=useState([] );
    const handleData =()=>{
        setData([...data,{name,phone,gender}]);
        console.log("Data Array", data);
    }
    return(
        
        <div>
           
<h1>
    Registration form
</h1>
<table>
<tr>
    <td>
        <lable for="floatingInputDisabled"
        >  Name</lable>
      
    </td>
    <td>
        <input type="text" onChange={(e)=>{setName(e.target.value)}}
        className="form-control"
        placeholder ="Enter your name"
       ></input>
    </td>
</tr>
<tr>
    <td>
        <lable for="floatingInputDisabled">  phone</lable>
      
    </td>
    <td>
        <input type="text"  onChange={(e)=>{setPhone(e.target.value)}}/> 
    </td>
</tr>
<tr>
    <td>Gender</td>
    <td>
        <select name="gender" id="gender">
            <option value="Female">Female</option>
            <option value="Male">Male</option>
        </select>
    </td>
    <td>
        <button onClick={setGender}>Submit</button>
    </td>
</tr>


<tr>
<tr>
    <td>Update</td>
   
    <td>
        <button onClick={handleData}>Submit</button>
    </td>
</tr>

</tr>
</table>
<RegformDisplay data ={data}/>
</div>
    );
}
export default RegForm;*/