
import './App.css';
import Header from './components/Header';
import Story from './components/Story';

function App() {

  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    
  }
  return (
    <div style={appStyle} className="App">
      <Header />
      <Story />
    </div>
  );
}

export default App;
