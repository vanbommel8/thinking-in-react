import React from 'react'
import Navigation from './Navigation'
import Header from './Header'
import Books from './Books'
import About from './About'
import Footer from './Footer'

function App() {
  return (
    <div id="page-wrap">
      <Navigation />
      
      <Header />
      <About />
      <Books />
      <Footer />
    </div>
  )
}

export default App