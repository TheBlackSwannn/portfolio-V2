import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './Components/Landing'
import ErrorPage from './Components/ErrorPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App