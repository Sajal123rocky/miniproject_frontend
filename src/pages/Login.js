import React from 'react';
import './login.css';
import MainLayout from "../mainlayout/MainLayout"
function Login(){
    return(
      <MainLayout>
    <div>
    <form action="action_page.php" method="post">
  <div class="imgcontainer">
    <img src="img_avatar2.png" alt="Avatar" class="avatar"/>
  </div>

  <div class="container">
    
    <input className="inp" type="text" placeholder="Enter Username" name="uname" required/>
    <br></br>
    <input className="inp" type="password" placeholder="Enter Password" name="psw" required/>
    <br></br>
    <button className="but" type="submit">Login</button>
  </div>
</form>

</div>
</MainLayout>);
}

export default Login;
