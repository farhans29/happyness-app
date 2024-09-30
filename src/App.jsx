 
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import HappyPage from './pages/HappyPage'
import NotSoHappyPage from './pages/NotSoHappyPage'
import NeutralPage from './pages/NeutralPage'
import NotHappyPage from './pages/NotHappyPage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/admin' ></Route>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/happy' element={ <HappyPage/> }></Route>
        <Route path='/notSoHappy' element={ <NotSoHappyPage/> }></Route>
        <Route path='/neutral' element={ <NeutralPage/> }></Route>
        <Route path='/notHappy' element={ <NotHappyPage/> }></Route>
      </Routes>
    </Router>
  )
}

export default App
