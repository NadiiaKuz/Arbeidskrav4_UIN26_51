import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Student from './pages/Student'

function App() {

  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path=':slug' element={<Student />} />
      </Routes>
    </Layout>
  )
}

export default App
