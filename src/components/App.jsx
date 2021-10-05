{
  /* ESERCIZIO PARTE 2: (Thinking in React)

- Aggiungere una "props" chiamata "title" al Componente "Header" che contenga il testo: "Welcome to React".

- Aggiungere un'altra props chiamata "date" al Componente "Header" che contenga la data di oggi (ricordatevi il metodo da appendere per stampare la Data come stringa) e mostrarla all'interno del componente.

- Creare un array di stringhe all'interno del componente "Books" con le seguenti 'All', 'Design', 'Mobile', 'DevOps', 'Essentials'. Iterare nell'array e stampare all'interno
del UL chiamato "nav.pills". La struttura dovrà essere la seguente "   

      <li>
         <a href="#">NOME DEL FILTRO</a>
      </li> */
}

import React, { useState } from 'react'
import Navigation from './Navigation'
import Header from './Header'
import Books from './Books'
import About from './About'
import Footer from './Footer'
import Menu from './Menu'

const navBooks = ['All', 'Design', 'Mobile', 'DevOps', 'Essentials']

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div id="page-wrap">

      {isMenuOpen && <Menu toggleMenu={toggleMenu} />}
      <Navigation toggleMenu={toggleMenu} />

      <Header
        title="Welcome to React"
        date={new Date().toLocaleDateString()} />

      <Books navBooks={navBooks} />

      <About />

      <Footer />
    </div>
  )
}

export default App
