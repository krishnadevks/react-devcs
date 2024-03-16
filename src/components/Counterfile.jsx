import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counterfile = () => {
    var[count,setcount]= useState(0)
    const changecount =()=>{
        setcount(count+1)
    }

    const decount =()=>{
        if (count==0) {
         setcount(count=0)   
        }
        else{
        setcount(count-1)
        }
    }
  return (
    <div style={{paddingTop:'80px'}}>
        <Typography variant='h4'>Count:{count}</Typography>
      <Button variant='contained' color='error'onClick={changecount}>+</Button>&nbsp;
      <Button variant='contained' color='error'onClick={decount}>-</Button>
    </div>
  )
}

export default Counterfile
