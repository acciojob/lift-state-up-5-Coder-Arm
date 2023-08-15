
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [isLoggedIn,setIsLoggedIn] = useState(false);

function formHandler(e){
   e.preventDefault();
   setIsLoggedIn(true)
}

  return (
    <div className="parent">
      <h1>Parent Component</h1>
        <form onSubmit={formHandler} style={isLoggedIn === true?{display : "none"}:{display: 'unset'}}>
         <label htmlFor="username">Username:
         <input type="text" id="username"/>
         </label>
         <label htmlFor="pass">Password: 
         <input type="password" id="pass"/>
         </label>
         <button>Login</button>
        </form>
        {isLoggedIn && <p>You are logged in!</p>}
    </div>
  )
}

export default App
