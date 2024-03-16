import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    //var name="class"
    var[name,setName]= useState("Class")
    var[val,setVal]= useState()

    const changeName =()=>{
        console.log("Cliked")
        setName(val)
    }
  
    const inputHandler = (e)=>{
       console.log(e.target.value)
       setVal(e.target.value)
    }
  return (
    <div  style={{paddingTop:'80px'}}>
      <Typography variant='h4'>Welcome:{name}</Typography>
      <TextField variant='outlined' label='Enter text' onChange={inputHandler}/><br/>
      <Button variant='contained' color='error'onClick={changeName}>Change</Button>
    </div>
  )
}

export default StateBasics
