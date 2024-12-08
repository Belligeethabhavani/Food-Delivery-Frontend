
function Studentcourse(){
    return(
    <div>
        <tittle className="title">
        STUDENT COURSES PROJECT  
        </tittle>
<nav className="nav">
    <table>
        <tr>
           
        <td> <a href="#home">Home</a></td>
        <td>  <a href="#courses">Courses</a></td>
        <td>  <a href="#faculty">Faculty</a></td>
        <td>  <a href="#results">Results</a></td>
        <td>  <a href="#contact">Contact</a></td>
       </tr>
       </table>
    </nav>
<h1 > Course List</h1>
        
      <div className="mar" >
<table border={3}  >
<tr className="rowclr1">
    <td>
Course Code
    </td>
    <td>
    Course Name
    </td>
</tr>
<tr className="rowclr2" >
    <td>
    23SDCS11E
    </td>
    <td>
    LINUX ADMINISTRATION & AUTOMATION
    </td>
</tr>
<tr className="rowclr1">
    <td>
    23EC2210A
    </td>
    <td>
    NETWORK PROTOCOLS & SECURITY
    </td>
</tr>
<tr className="rowclr2">
    <td>
    23CS2103R 
    </td>
    <td>
    ADVANCED OBJECT ORIENTED PROGRAMMING
    </td>
</tr>
<tr className="rowclr1">
    <td>
    23CS2104R 
    </td>
    <td>
    OPERATING SYSTEMS
    </td>
</tr>
</table>
</div>


    </div>
);
}
export default Studentcourse;