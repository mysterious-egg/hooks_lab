import React,{useState} from 'react'
import { useEffect } from 'react'

function UseState(props) {
    const [state, setState] = useState(" ");
    const [count, setCount] = useState(0);

    const handleState = () => {
        setState(state=>state == " "?props.para:"")
    }

    useEffect(()=>{
        alert("Content button clicked")
    },[state])

    const handleLike = () => {
        setCount(count=>count+1)
    }
  return (
    <div className='contain'>
      <h3>{state}</h3>
      <button onClick={handleState}>Content</button>
      <h3>{count}</h3>
      <button onClick={handleLike}>Like</button>
    </div>
  )
}

export default UseState
