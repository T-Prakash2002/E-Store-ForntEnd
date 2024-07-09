
import './App.css'
import Navbar from './components/Navbar'

function App() {

  console.log(import.meta.env.VITE_APIURL)
  return (
    <>
      <Navbar/>
      <div className="footer mt-4">
        <p>&copy; 2024 Copyright: All Rights Reserved</p>
      </div>
    </>
  )
}

export default App
