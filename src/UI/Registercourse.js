
function Registercourse(){
    return (
<div style={{backgroundColor:"green"}} >
<table border="2" style={{height:"125px",width:"300px"}}>
    <tr >
        <td>
            Student ID and Name
        </td>
        <td>
        <input type="text"></input>
        </td>
        <td>
        <input type="text"></input>
        </td>
    </tr >
    <tr border="2">
        <td>
            Cloud
        </td>
        <td>
            MobileApp
        </td>
        <td>
            Cybersecurity
        </td>
    </tr>
    <tr>
        
        <td >
            
        <select style={{fontSize:"10px"}}  name="Course" id="Course">
        <option value="AWS">AWS</option>
        <option value="Dynamic Cloud Server">Dynamic Cloud Server</option>
        <option value="Google Cloud"> 
        Google Cloud
        </option>
        </select>
        </td>
       <td>
       <select style={{fontSize:"10px"}}  name="Course" id="Course">
        <option value="Application">Application</option>
        <option value="Designing">Designing</option>
        <option value="Software application"> Software application</option>
            </select>
       </td>
       <td >
       <select style={{fontSize:"10px"}}  name="Course" id="Course">
        <option value="Encoding">Encoding</option>
        <option value="Security">Security</option>
        <option value="Blockchain">Blockchain </option>
            </select>
       </td>
    </tr>
    <tr>
        
            <td >
                <button>Submit</button>
            </td>   
           
        </tr>
</table>
</div>

    )
}
export default Registercourse;