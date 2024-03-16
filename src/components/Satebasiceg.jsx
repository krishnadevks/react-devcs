import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Satebasiceg = () => {
    var[name,setName]= useState("")
    const changeName =()=>{
      setName("HomePage")
    }
    const changegname=()=>{
        setName("Gallery")
    }
    const changecName=()=>{
        setName("Contact")  
    }
    useEffect(()=>{
        changecName()
    },[])
  return (
    <div style={{padding:'80px'}}>
      <Typography variant='h5'>Welcome To {name}</Typography>
      <Button variant='contained' color='success'onClick={changeName}>HomePage</Button>
      <Button variant='contained' color='error'onClick={changegname}>Gallery</Button>
      <Button variant='contained' color='success'onClick={changecName}>Contact</Button>
    </div>
  )
}

export default Satebasiceg
