import { useState, useRef } from 'react';
import './App.css';

export const App = () => {
  const [text, setText] = useState('');
  const textRef = useRef();

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleClick = () => {
    textRef.current.innerText = text.toUpperCase();
  }

  return (
    <>
      <input type="text" onChange={handleChange} />
      <button type="button" onClick={handleClick}>Show Text</button>
      <div className='text-output' ref={textRef}></div>
    </>
  )
}

export default App