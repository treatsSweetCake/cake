import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import NavBar from './components/navBar'
import BoxShadow from './pages/boxShadow'
import Footer from './components/footer'
import Border from './pages/border'
import Gradient from './pages/gradient'
import LiveEditor from './pages/liveEditor'
import RgbToHex from './pages/rgbToHex'
import About from './pages/about'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/box-shadow" element={<BoxShadow />} />
        <Route path="/border" element={<Border />} />
        <Route path="/gradient" element={<Gradient />} />
        <Route path="/live-editor" element={<LiveEditor />} />
        <Route path="/rgb-&-hex-convertor" element={<RgbToHex />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
