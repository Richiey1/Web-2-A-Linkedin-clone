import React from 'react';
import './App.css';
import 'boxicons';
import Navbar from './components/navbar';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
  <div className='App' >
    <Navbar />
   

    <div className="content-container">
      <ProfileCard />
    </div>
  </div>
  );
  };
  export default App;
