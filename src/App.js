import React from 'react'
import UserContextProvider from '../src/context/userContext';
import './App.css';
import Routing from './Routing/Routing';

function App() {
  

  return (
    <UserContextProvider>
      <Routing/>
    </UserContextProvider>
  );
}

export default App;
