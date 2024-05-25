import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MoreProjects from './pages/MoreProjects'
import MainPage from './MainPage'

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainPage />}/>
      <Route path = '/projects' element = {<MoreProjects />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
