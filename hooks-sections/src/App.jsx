import { useState, useEffect } from 'react'
import  axios  from 'axios';
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const url = 'https://jsonplaceholder.typicode.com/posts'

  const [count, setCount] = useState(0)

  const [data, setData] = useState([]);


  useEffect(() => {
    this.getData();
  
    return () => {
    }
  }, []);

  const getData = async () => {
    const resp = axios.get(url).then(res => {
      setData(res.data);
    })

    console.log(data, setData)
  } 
  
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <button onClick={() => getData}>NUEVOOO</button>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
