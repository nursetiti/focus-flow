import './App.css'
import {Routes, Route} from 'react-router'
import Today from './components/Today'
import Courses from './components/Courses'
import Sessions from './components/Sessions'
import Insights from './components/Insights'
import Navbar from './components/Navbar'


function App() {

  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Today/>}></Route>
        <Route path='courses' element={<Courses/>}></Route>
        <Route path='sessions' element={<Sessions/>}></Route>
        <Route path='insights' element={<Insights/>}></Route>
      </Routes>
    
    </>
  )
}

export default App
