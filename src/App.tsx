
import Benefit from './components/layout/Benefit'
import FooterSection from './components/layout/FooterSection'
import Hero from './components/layout/Hero'
import How from './components/layout/How'
import Logo from './components/layout/Logo'
import Navbar from './components/layout/Navbar'
import Price from './components/layout/Price'
import Product from './components/layout/Product'

const App = () => {
  return (
    <div className='min-h-screen font-inter text-[#191A15] bg-linear-to-r from-green/30 to-[#FFD6D6]/30 overflow-hidden  '>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <Logo />
      <section id="how">
        <How />
      </section>
      <section id="product">
        <Product />
      </section>
      <section id="benefit">
        <Benefit />
      </section>
      <section id="price">
        <Price />
      </section>
      <section id="about">
        <FooterSection/>
      </section>

    </div>
  )
}

export default App