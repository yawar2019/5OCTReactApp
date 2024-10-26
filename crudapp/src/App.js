 
import './App.css';
import React from "react";
import {BrowserRouter as Router,Routes,Route} from  'react-router-dom';

import  LayoutComponent  from './Components/LayoutComponent';
import  HomeComponent  from './Components/HomeComponent';
import  AboutComponent  from './Components/AboutComponent';
import  ContactUSComponent  from './Components/ContactUSComponent';
import  EmptyComponent  from './Components/EmptyComponent';
import { useState } from 'react';

function App() {
const[textcolor,settextcolor]=useState("red");
const[textcolor2,settextcolor2]=useState("red");
 const changeColor=()=>
  {

    settextcolor2(textcolor);
  }

  const colorChanged=(e)=>
    {
  
      settextcolor(e.target.value);
    }
  

  
  return (
     <div>
     
        <Router>
        <Routes>
          <Route path='/'  element={<LayoutComponent/>}>
          <Route  index element={<HomeComponent/>}></Route>
          <Route path='/About' element={<AboutComponent/>}></Route>
          <Route path='/ContactUS' element={<ContactUSComponent/>}></Route>
          <Route path='/getLocalStorageExample' element={<getLocalStorageExample/>}></Route>
          <Route path='*' element={<EmptyComponent/>}></Route>
          </Route>
        </Routes>
        </Router> 

        <input type="text" onChange={colorChanged}></input>
        
<button onClick={changeColor}>Update</button>

<span style={{backgroundColor:textcolor2}}>llllllo     </span>
        </div>
  );
}

export default App;
