import React , {useState,useRef} from 'react';
const Controlled = () =>{
  const [state,setState]= useState('')
  function alertValue() {
    alert(state)
    
  }
  return(
    <div>
      <input type='text' value={state} onChange={(e)=>setState(e.target.value)}/>
      <button onClick={alertValue}>Click Controlled</button>
    </div>
  )
}

const Uncontrolled = () => {
  const inputRef = useRef()  
  function alertValue() {
    alert(inputRef.current.value)
    
  }
  return(
    <div>
      <input type='text' ref={inputRef}/>
      <button onClick={alertValue}>Click Uncontrolled</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
        <Controlled/>
        <Uncontrolled/>
    </div>
  );
}
export default App;
