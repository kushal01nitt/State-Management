import { createContext, useContext, useState } from 'react'
import { Button, Card , Typography } from '@mui/material'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState,atom } from 'recoil';

function App() {
  return (
    <RecoilRoot>
     <div style  = {{display : 'flex' , justifyContent : 'center'}}>
      <Card style={{padding : 20 , width : 500}}>
         <Typography variant='h5' textAlign={"center"}> Welcome to the counter game </Typography>
         <br />
         <Buttons />
         <CountComponent />
      </Card>
     </div>
   </RecoilRoot>
  )
}

function Buttons(){
   return <div style={{display : 'flex' , justifyContent : 'space-between'}}>
      <Increase />
      <Decrease />
   </div>
}

function Increase(){
  const setCount = useSetRecoilState(countState)
  return <div>
    <Button variant= {"contained"} onClick={() => {
      setCount((existingCount) => existingCount+1)
    }}>Increase counter</Button>
  </div>
}

function Decrease(){
  const setCount = useSetRecoilState(countState)
  return <div>
    <Button variant= {"contained"} onClick={() => {
      setCount((existingCount) => existingCount-1)
    }}>Decrease counter</Button>
  </div>
}

function CountComponent(){
  const count = useRecoilValue(countState)
  return <div> 
     <Typography variant='h5' textAlign={"center"}> {count} </Typography> 
     </div>
}

const countState = atom({
  key : 'countState',
  default : 0,
});
// now we deffine this globally and use this only when required so that the amount of rerenders that happen are less 
// we subscribe to the count/setCount only to the functions that need em 
// first we were reredering just so that children could also have {count,setCount} as props but using context we can remove that 
// but using context the number of re-renders is still the same 
// so we use recoil state mgmt so that we only have re-renders when we have subscribed to count 

export default App


