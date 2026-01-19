
import Hero from './components/layout/Hero'
import How from './components/layout/How'
import Logo from './components/layout/Logo'
import Navbar from './components/layout/Navbar'
import Product from './components/layout/Product'

const App = () => {
  return (
    <div className='min-h-screen font-inter text-[#191A15] bg-linear-to-r from-green/30 to-[#FFD6D6]/30 overflow-hidden  '>
      <Navbar/>
      <Hero/>
      <Logo/>
      <How/>
      <Product/>
    </div>
  )
}

export default App