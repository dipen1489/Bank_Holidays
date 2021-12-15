import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Time(prop:any) {

  const[firstClock , setTime] = useState('');
  
  useEffect(() =>{

  });

  setInterval(function(){
  var date = new Date();

  var dateStr = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" "+(date.getHours() >= 12 ? "pm" : "am");
    setTime(dateStr);
  },prop.time)

  return (
    <>
    <h1>{firstClock}</h1>
    </>
  );
}

export default Time;
