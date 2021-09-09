import React, {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'
function App() {
  const [userName, setUserName]= useState('')
  
  useEffect(() => {
    getNames()
  }, [])

  const getNames = async() => {
    const response = await axios.get('/names')
    setUserName(response.data)
    console.log(response)
  }
  return (
    <>
    <h1> My aesome CI/CD stack site</h1>
    <h3> My name is {userName}</h3>
    </>
  );
}

export default App;
