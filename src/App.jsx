import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="container">
      <h1>To-Do List <a href="#" className="add"><i class="fa fa-plus color-w"></i></a></h1>
      <input type="text" placeholder="Add New To-Do" />
        <ul>
          <li className='d-flex justify-content-start ps-3 pe-3'><a href="#" className='pe-3'><i class="fa fa-trash"></i></a><div>React</div></li>
        </ul>
    </div>
  )
}

export default App
