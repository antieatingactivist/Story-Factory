
import './App.css';
import Header from './components/Header';
import Story from './components/Story';
import Login from './components/Login';
// import UserProvider from './utils/UserContext';
import { createContext, useContext, useState } from 'react';

export const LoginContext = createContext();
// export const myState = () => useContext(LoginContext)

function App() {
  const [loginShow, setLoginShow] = useState(false);

  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    
  }
  return (
    <div style={appStyle} className="App">
      
      <LoginContext.Provider value={ {loginShow, setLoginShow} }>
        <Header />
        <Story />

      
        {loginShow ? <Login /> : <></>}
        {/* <Login /> */}
      </LoginContext.Provider>

    </div>
  );
}

export default App;
