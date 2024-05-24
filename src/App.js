import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { MyComponent } from './components/MyComponent';
import { SecondComponent } from './components/SecondComponent';
import { ThirdComponent } from './components/ThirdComponent';
import { Children } from './components/Children';
import { FourComponent } from './components/FourComponent';



function App() {
  const [name, setName] = useState ("Lina");
const [message, setMessage] = useState ("Lina");


const addMessage = (message) => {
  console.log(message);
  setMessage(message);
}

const MedicalRecord = {
   height: "1.65",
   allergies:  "None",
   bloodGroup: "Rh0+"
};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estructura inicial del proyecto y limpia.
        </p>
        <hr />
        <FourComponent/>
        <hr />
        <h2>Mensaje del hijo:</h2>
        <p>{message}</p>
        <Children name = {name}  setName={setName} addMessage={addMessage}/>
        <MyComponent/>
        <SecondComponent/>
        <ThirdComponent
          name= "Juliet"
          lastName= "Gomez"
          card = {MedicalRecord}
        />
      </header>
    </div>
  );
}

export default App;
