import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Question from './Pages/Question'
import './App.css'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path='/Question' element ={<Question/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
