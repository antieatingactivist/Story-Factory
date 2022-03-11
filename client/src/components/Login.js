import React, { useContext, useState } from 'react';
import { LoginContext } from '../App';




export default function Login() {

    const loginShow = useContext(LoginContext);

    
    console.log(loginShow.loginShow);

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');


    const loginStyle = {
        position: 'fixed',
        top: "100px",
        left: "10vw",
        border: "1px solid #ffffff",

        backgroundColor: '#000000bb',
        webkitBackdropFilter: 'blur(4px)',
        BackdropFilter: 'blur(4px)',
        height: '300px',
        width: '80vw',

    }


    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;

        // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
        return name === 'userName' ? setUserName(value) : setEmail(value);
    
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    
        // Alert the user their first and last name, clear the inputs
        // alert(`Hello ${userName}`);
        setUserName('');
        setEmail('');
        loginShow.setLoginShow(false);
      };


    //   console.log(this);
    return (
   
        <section style={loginStyle}>
                  <p>
        Please Login to continue.
        
        
        
      </p>
      <form className="form">
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          // onChange={orThisWayForBoth}
          type="text"
          placeholder="userName"
  
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          // onChange={orThisWayForBoth}
          type="text"
          placeholder="email"

        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      
        </section>
   
    );
  }