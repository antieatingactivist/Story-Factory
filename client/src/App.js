
import './App.css';
import Header from './components/Header';
import Story from './components/Story';
import Login from './components/Login';
import Home from './components/Home';
import ParticleBackground from './components/particlebackground';
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
  
  return (
    <div style={appStyle} className="App">
      {/* <ParticleBackground/> */}
      <GlobalContext.Provider value={ {globalState, setGlobalState} }>
        <Header />
    
        
        {globalState.homeShow ? <Home /> : <Story />}

       
        

        {globalState.loginShow ? <Login /> : <></>}
     
      </GlobalContext.Provider>

    </div>
  );
}

export default App;
