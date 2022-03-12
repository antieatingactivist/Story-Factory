
import './App.css';
import Header from './components/Header';
import Story from './components/Story';
import Login from './components/Login';
import Home from './components/Home';
import Create from './components/Create';
// import UserProvider from './utils/UserContext';
import { createContext, useContext, useState } from 'react';


export const StoryContext = createContext();

// export const myState = () => useContext(LoginContext)

function App() {
  const [storyShow, setStoryShow] = useState({
    
    loginShow: false,
    homeShow: false
  });


  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    
  }
  return (
    <div style={appStyle} className="App">
      
      <StoryContext.Provider value={ {storyShow, setStoryShow} }>
        <Header />
    
        <Create />
        {/* {storyShow.homeShow ? <Home /> : <Story />} */}
      
        {storyShow.loginShow ? <Login /> : <></>}
     
      </StoryContext.Provider>

    </div>
  );
}

export default App;
