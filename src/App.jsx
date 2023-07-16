import { Routes } from 'react-router-dom'
import { Navbar, Search, Property, Advertise, Footer } from './components/index'

import './App.css'

function App() {
  return (
    <div>
        <Routes path='/' element={<App />} />

        <Navbar />
        <Search />
        <Property />
        <Advertise />
        <Footer />
    </div>
  )
}

export default App
