
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  //state creation
  const[principle,setPrinciple]=useState('')
  const[year,setYear]=useState('')
  const[rate,setRate]=useState('')
  const[interest,setInterest]=useState('')

  console.log(principle);
  console.log(rate);
  console.log(year);
  
  const handleCalculate=(e)=>{
     let output = principle * rate * year /100
     console.log(output);
     setInterest(output)
  }

  const handleReset= (e)=>{
    setRate('')
    setPrinciple('')
    setInterest('')
    setYear('')
  }

  return (
    <div className="App">
      <header className="App-header">

        <div className="container">

          <div className="head">
            <h1>Simple Interest Calculator</h1>
            <p >The Simple Interest Calculator calculates the interest and end balance based on the simple interest formula. Click the tabs to calculate the different parameters of the simple interest formula. 
               In real life, most interest calculations involve compound Interest.</p>
          </div>

          <div className="card">
            <h3 className='symbol'>&#8377;{interest}</h3>
            <p id='para'>Your total Simple Interst</p>
          </div>
    <br />
          <div className="input">
               <TextField id="outlined-basic" label="Principle Amount" variant="outlined" 
               onChange={e=>setPrinciple(e.target.value)} value={principle} /> <br />

               <TextField id="outlined-basic" label="Rate of Interest" variant="outlined" 
                onChange={e=>setRate(e.target.value)} value={rate} /> <br />

               <TextField id="outlined-basic" label="Year" variant="outlined"
               onChange={e=>setYear(e.target.value)} value={year} /><br />
               

               <Button onClick={handleCalculate} variant="contained">Calculate</Button> <br />
               <Button onClick={handleReset} variant="outlined">Reset</Button>
          </div>
    
               

        </div>

      </header>
    </div>
  );
}

export default App;
