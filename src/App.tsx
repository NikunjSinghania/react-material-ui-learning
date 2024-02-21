import React, { useState } from 'react';
import './App.css';
import Navbar from './Parts/Navbar';
import Sidebar from './Parts/Sidebar';
import { Provider } from 'react-redux';
import store from './Redux/STORE';
import MainContainer from './Parts/MainContainer';

interface User {
  name : string,
  loginTime : Date,
  email : string,
}

function App() {

  const [login, setLogin] = useState(false)
  const [user, setUser] = React.useState<User>()


  return (
    <>

    <Provider store={store}>
    <div className="App" style={{
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        width : '95vw'
      }}>
        <Navbar />

      </div>
      <div style={{
        display : 'flex',
        justifyContent :'space-around',
        width : '95vw'
      }}>
      <Sidebar />
      <MainContainer />

      </div>
        
    </Provider>
      
    </>
    
  );
}

export default App;
