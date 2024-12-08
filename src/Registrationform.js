
function Registrationform(){
return(

    <div className="grad" >
        <h1>
            RegistrationStudent
        </h1>
    <form className="box" >
        <center>
        <h1>
            REGISTRATION FORM
        </h1></center>
        <table>
            <tr>
                <td>
    Name:     </td>       <td> <input type="text"></input> </td></tr>
    <tr> <td>
    Last Name:   </td>  <td>    <input type="text"></input> </td></tr>
    <tr><td>
    Date of Birth: </td> <td>   <input type="text"></input></td></tr>
    <tr><td>
    Email:   </td>       <td>   <input type="text"></input> </td></tr>
    <tr><td>
    Phone Number: </td>  <td>   <input type="text"></input> </td></tr>
    <tr><td>
    Address:        </td><td>   <input type="text"></input> </td></tr>
   <tr><td>
   Gender: </td> 
   <td>
  <input type="radio"></input> FEMALE
  <input type="radio" ></input> MALE </td>
  </tr> 
  <tr> <td>
    <label for="Course">Course Selection:</label> </td>
    <td>
<select name="Course" id="Course">
  <option value="CSE">CSE</option>
  <option value="EEE">EEE</option>
  <option value="ECE" >ECE</option>
  <option value="AL&ML" >AL&ML</option> 
</select></td></tr>
<tr><td>
Password: </td><td><input type="password"  ></input></td></tr>
<tr><td>
Confirm Password: </td><td><input type="password"  ></input></td></tr>
</table>
<center>

<button>submit</button>
</center>
    </form>
    </div>

)
}
export default Registrationform;