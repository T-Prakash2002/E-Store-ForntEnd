
import './App.css'
import Navbar from './components/Navbar'
import { useDispatch } from 'react-redux'

function App() {

  return (
    <>
      <Navbar/>
      <div className="footer mt-4">
        <p className='text-center'>@2023 All rights reserved</p>
      </div>
    </>
  )
}

export default App
