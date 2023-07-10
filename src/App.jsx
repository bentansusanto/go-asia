import FormTicket from './components/Form'
import Homepage from './components/Homepage'
import Ticket from './components/Ticket'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Tour from './components/Tour'
import Store from './components/Store'
import NotFound from './components/NotFound'
import ProductDetail from './components/Store/components/ProductDetail'
import News from './components/News'



function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/tour' element={<Tour/>}/>
          <Route exact path='/store' element={<Store/>}/>
          <Route exact path='/news' element={<News/>}/>
          <Route path='/store/:id/:slug' element={<ProductDetail/>}/>
          <Route path='/ticket' element={<Ticket/>}/>
          <Route path='/form-ticket' element={<FormTicket/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
  )
}

export default App
