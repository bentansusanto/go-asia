import FormTicket from './components/Form'
import Homepage from './components/Homepage'
import Ticket from './components/Ticket'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Tour from './components/Tour'
import Store from './components/Store'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/tour' element={<Tour/>}/>
          <Route path='/store' element={<Store/>}/>
          <Route path='/ticket' element={<Ticket/>}/>
          <Route path='/form-ticket' element={<FormTicket/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
