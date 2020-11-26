import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {

  const [name, setName] = useState('');
  const handleChange = (event) => {
    setName(event.target.value);
  }

  return (
    <div class="name-input">
        <h1>My name via a functional component is : {name}</h1>
        <input type="text" value ={name} onChange = {handleChange}/>
      </div>
  );
}

function useState(initialValue) {
  let value = initialValue;

  function setState(newValue) {
    value = newValue;
    ReactDOM.render(<App/>, document.getElementById('root'))
  }
  return [value, setState]
}

export default App;
