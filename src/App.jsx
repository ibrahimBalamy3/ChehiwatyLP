import './App.css'
import Contact from './sections/contact/Contact'
import Header from './sections/header/Header'
import Hero from './sections/hero/Hero'
import Reservations from './sections/reservations/Reservations'
import Footer from './sections/footer/Footer'
import Menu from './sections/menu/Menu'
import About from './sections/about/About'
import Main from './components/main/Main'

function App() {

  return (
      <>
        <Header />
        <Main>
          <Hero />
          <Menu />
          <About />
          <Reservations />
          <Contact />
        </Main>
        <Footer />
      </>
  )
}

export default App
