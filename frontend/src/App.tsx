import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Bitcoin Cash Vault DApp</h1>
      <div className="card">
        <p>
          Welcome to the Bitcoin Cash Vault DApp
        </p>
      </div>
    </div>
  )
}

export default App

