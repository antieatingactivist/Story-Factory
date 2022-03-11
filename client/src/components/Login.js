import React, { useContext, useState } from 'react';
import { StoryContext } from '../App';




export default function Login() {

    const storyShow = useContext(StoryContext);

    
    console.log(storyShow.loginShow);

    const [loginUserName, setLoginUserName] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [signupUserName, setSignupUserName] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [email, setEmail] = useState('');


    const loginStyle = {
        display: 'flex',
        position: 'fixed',
        top: "100px",
        left: "10vw",
        border: "1px solid #ffffff",

        backgroundColor: '#000000bb',
        WebkitBackdropFilter: 'blur(4px)',
        BackdropFilter: 'blur(4px)',
        height: '300px',
        width: '80vw',
        padding: '20px',
        fontSize: '1.4em'

    }
    const divStyle = {
        width: '50%',
        marginLeft: '10%',
        marginRight: '10%',
    }

    const formStyle = {
        marginLeft: '10%',
    }
    const dividerStyle = {
        height: '100%',
        border: '.5px solid #ffffff66'
    }


    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;

        // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
        // return name === 'userName' ? setLoginUserName(value) : setLoginPassword(value);

        switch (name) {
            case 'loginUserName' : {
                return setLoginUserName(value);
            }
            case 'loginPassword' : {
                return setLoginPassword(value);
            }
            case 'signupUserName' : {
                return setSignupUserName(value);
            }
            case 'signupPassword' : {
                return setSignupPassword(value);
            }
            case 'email' : {
                return setEmail(value);
            }
            default: return;
        }
    
    };

    const handleLoginSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    
        // Alert the user their first and last name, clear the inputs
        // alert(`Hello ${userName}`);
        setLoginUserName('');
        setLoginPassword('');
        storyShow.setStoryShow({loginShow: false});
    };

    const handleSignupSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    
        // Alert the user their first and last name, clear the inputs
        // alert(`Hello ${userName}`);
        setSignupUserName('');
        setSignupPassword('');
        setEmail('');
        storyShow.setStoryShow({loginShow: false});
    };


    //   console.log(this);
    return (
   
        <section style={loginStyle}>

        <div style={divStyle}>
        <p>Welcome Back Writers!</p>
        <form className="form" style={formStyle}>
            <input
            value={loginUserName}
            name="loginUserName"
            onChange={handleInputChange}
            // onChange={orThisWayForBoth}
            type="text"
            placeholder="userName"
    
            /><br />
            <input
            value={loginPassword}
            name="loginPassword"
            onChange={handleInputChange}
            // onChange={orThisWayForBoth}
            type="password"
            placeholder="password"

            /><br />
            <button type="button" onClick={handleLoginSubmit}>
            Login!
            </button>
      </form>
        </div>

        <div style={dividerStyle}></div>

        <div style={divStyle}>
        <p>Not a member? Join the Community!</p>
      <form className="form" style={formStyle}>
        <input
          value={signupUserName}
          name="signupUserName"
          onChange={handleInputChange}
          // onChange={orThisWayForBoth}
          type="text"
          placeholder="userName"
  
        /><br />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          // onChange={orThisWayForBoth}
          type="email"
          placeholder="email"

        /><br />
        <input
          value={signupPassword}
          name="signupPassword"
          onChange={handleInputChange}
          // onChange={orThisWayForBoth}
          type="password"
          placeholder="password"

        /><br />
        <button type="button" onClick={handleSignupSubmit}>
          Join Us!
        </button>
      </form>
      </div>
        </section>
   
    );
  }