import { GlobalContext } from '../App';
import { useContext } from 'react';
import Auth from '../utils/auth';

const navStyle = {
    paddingTop: "10px",
    display: "flex",
    justifyContent: "flex-end", 
    // backgroundColor: "#222222",
    fontSize: "1.4em",
    width: "100%",
       
}

const aStyle = {
    padding: "10px",
}



export default function Nav() {
    const globalState = useContext(GlobalContext);


    return (
        <nav style={navStyle}>

            
            <a style={aStyle} href="#f">Other Link</a>
            <a style={aStyle} href="#f" onClick={() => globalState.setGlobalState((prevState) => ({...prevState, homeShow: true}))} >Home</a>
            {Auth.loggedIn() ? (
                <>
                    <p style={aStyle} href="#f">Welcome Back!</p>
                    <a style={aStyle} href="#f" onClick={Auth.logout} >Logout</a>
                </>
            ) : ( 
                  <a style={aStyle} href="#f" onClick={() => globalState.setGlobalState((prevState) => ({...prevState, loginShow: true}))} >Login</a> 
            
            )}
      
        </nav>
    );
  }