import React from "react";
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './InputField.css';

const InputField = ({setCity}) => {
    let [input, setInput] = useState('');
  
    return(
      <div className="input">
        <input className='text' type='text' onChange={event => setInput(event.target.value)}/>
        <button className='submit' onClick={() => {
          setCity(input)
          }
        }><SearchIcon/></button>
      </div>
    )
  }

export default InputField;