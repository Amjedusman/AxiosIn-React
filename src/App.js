
import { useState } from 'react';
import './App.css';
import axios from "axios"

function App() {
  const [state,setState]=useState([])
  return (
    <div>
      <h2>Hello world!!!</h2>
      <button onClick={()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
          console.log(response.data);
          setState(response.data);
        })
      }}>Click me</button>
      
      <table>
        <thead>
          <tr>
            <td>Sno</td>
            <td>title</td>
            <td>data</td>
          </tr>
        </thead>
        <tbody>
        {state.map((item, index) => (
          <tr key={index}>
            <td>{index+1}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
