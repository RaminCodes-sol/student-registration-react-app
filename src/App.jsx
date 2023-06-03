import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import EditStudent from './pages/EditStudent'
import AddStudent from './pages/AddStudent'


function App() {

  return (
    <div id="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/editStudent/:name' element={<EditStudent />} />
        <Route path='addStudent' element={<AddStudent />} />
      </Routes>
    </div>
  )
}

export default App
