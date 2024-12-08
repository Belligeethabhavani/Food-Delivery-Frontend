function Login(){
    return(
        <div style={{ background: 'radial-gradient(  #F3D0D7 , #7AA2E3)', height: '700px', width: '1535px' , display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
<form >
    <h1>
        Login Page
    </h1>
    <table border="5" style={{height:"125px",width:"300px"}}>
        <tr>
            <td>
                Username
            </td>
            <td>
                <input type="text"></input>
            </td>
        </tr>
        <tr>
            <td>
                Password
            </td>
            <td>
            <input type="password"  ></input>
            </td>
        </tr>
        <tr>
            <td>
                <button>login</button>
            </td>    
        </tr>
    </table>
</form>
</div>

    )
}
 export default Login;