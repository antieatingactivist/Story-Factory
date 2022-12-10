
import './App.css';
import Header from './components/Header';
import Story from './components/Story';
import Login from './components/Login';
import Home from './components/Home';

// import UserProvider from './utils/UserContext';
import { createContext, useState } from 'react';


export const GlobalContext = createContext();

function App() {

  //these are the global variables that can be accessed throughout the app.
  const [globalState, setGlobalState] = useState({
    
    loginShow: false,
    homeShow: false
  });


  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    
  }
  const overlayStyle = {
    background: "repeating-linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2) 1px,  transparent 2px,  transparent 3px)",
    height: "100vh",
    width: "100vw",
    position: "absolute",
    pointerEvents: "none"
  }
  
  return (
    <div style={appStyle} className="App">
      <GlobalContext.Provider value={ {globalState, setGlobalState} }>
        <Header />
    
        
        {/* {globalState.homeShow ? <Home /> : <Story />} */}

       
        

        {globalState.loginShow ? 
          <Login /> : 
          <>{globalState.homeShow ? <Home /> : <Story />}</>}
     
      </GlobalContext.Provider>
      <div style={overlayStyle}></div>
    </div>
  );
}

export default App;
