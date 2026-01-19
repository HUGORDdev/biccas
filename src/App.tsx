
import Hero from './components/layout/Hero'
import Navbar from './components/layout/Navbar'

const App = () => {
  return (
    <div className='min-h-screen text-[#191A15] bg-linear-to-r from-green/30 to-[#FFD6D6]/30 overflow-hidden  '>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App