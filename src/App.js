import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Props from './components/Props';
import Card from './components/Card';
import swim from "./images/swim.png";
import wed from "./images/wedding.png";
import cycle from "./images/bicycle.png";
import Data from './components/Jokes';
import New from './components/New';

function Prop(){
  return(
    <div className='done'>
      <Card 
        img={swim}
        rating="5.0"
        people="6"
        phrase="Life lessons with Katie Zaferes"
        money="136"
      />
      <Card 
        img={wed}
        rating="5.0"
        people="30"
        phrase="Learn wedding photography"
        money="126"
      />
      <Card 
        img={cycle}
        rating="4.8"
        people="2"
        phrase="Group Mountain Biking"
        money="50"
      />
      <Card 
        img={swim}
        rating="5.0"
        people="6"
        phrase="Life lessons with Katie Zaferes"
        money="136"
      />
      <Card 
        img={wed}
        rating="5.0"
        people="30"
        phrase="Learn wedding photography"
        money="126"
      />
      <Card 
        img={cycle}
        rating="4.8"
        people="2"
        phrase="Group Mountain Biking"
        money="50"
      />
      <Card 
        img={wed}
        rating="5.0"
        people="30"
        phrase="Learn wedding photography"
        money="126"
      />
      <Card 
        img={wed}
        rating="5.0"
        people="30"
        phrase="Learn wedding photography"
        money="126"
      />
      <Card 
        img={cycle}
        rating="4.8"
        people="2"
        phrase="Group Mountain Biking"
        money="50"
      />
    </div>
  )
}


function App() {
  return (
    <div>    
      <Navbar />
      <Hero />
      {Prop()}
    </div>
  )
}

export default App;
