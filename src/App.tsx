import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/styles.css'

window.addEventListener("load", (e) => {
  const cards = document.querySelectorAll('section')!;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        let target = entry.target;
        if (!target.classList.contains('--fadeinup') && target.id !== "home")
          target.classList.add('--fadeinup');
      }
    });
  });

  cards.forEach(card => {
    observer.observe(card)
  })
})

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Home></Home>
        <Portfolio></Portfolio>
        <About></About>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
