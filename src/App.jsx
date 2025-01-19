import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import SattisticsCard from './components/SattisticsCard'

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='*' element={<NotFound/>}/>
            <Route path='/cards' element={<SattisticsCard/>}/>

          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
