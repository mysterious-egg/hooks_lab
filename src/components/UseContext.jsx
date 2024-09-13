import React, { useContext } from 'react';
import { ToggleTheme } from '../App';
import UseState from './UseState';

function UseContext() {

    const theme = useContext(ToggleTheme);
    const themetype = {
        backgroundColor: theme ? 'black' : 'gray',
        color: theme ? 'white' : 'black'
    }


  return (
    <div style = {themetype}>
       <UseState/>   
    </div>
  )
}

export default UseContext
