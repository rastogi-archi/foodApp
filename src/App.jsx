import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Menu from './pages/Menu'
import Home from './pages/Home'
import MobileApp from './pages/MobileApp'
import ContactUs from './pages/ContactUs'
import Search from './pages/Search'
import SignIn from './pages/SignIn'
import Basket from './pages/Basket'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/mobileApp' element={<MobileApp/>} />
          <Route path='/contactUs' element={<ContactUs/>} />
          <Route path='/search' element={<Search/>} />
          <Route path='/basket' element={<Basket/>} />
          <Route path='/signIn' element={<SignIn/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
