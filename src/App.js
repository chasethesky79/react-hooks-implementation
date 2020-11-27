import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

let values = [];
let currentHook = 0;

function App() {

  currentHook = 0;

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }

  return (
    <div class="name-input">
        <h1>My name via a functional component is : {name}, {lastName}</h1>
        <input type="text" value ={name} onChange = {handleChange}/>
        <input type="text" value ={lastName} onChange = {handleLastNameChange}/>
      </div>
  );
}

function useState(initialValue) {

  if (!values[currentHook]) {
     values[currentHook] = initialValue;
  }

  let hookIndex = currentHook;
  function setState(newValue) {
    values[hookIndex] = newValue;
    ReactDOM.render(<App/>, document.getElementById('root'))
  }
  
  return [values[currentHook++], setState]
}

export default App;
