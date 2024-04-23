import Navbar from './components/navbar/Navbar'
import './App.css'
import Footer from './components/footer/Footer'
import Button from './components/button/Button'
import Products from './components/products/Products'

  // Estilos como constante que contiene un objeto
  const pStyle = {
    color: "yellow",
    fontSize: "21px",
    fontFamily: "cursive",
  }

function App() {

  return (
    <>
      < Navbar />
      <h1>Generation CH39</h1>
      { /* <p>Hola GenMx</p> */ }
      {/* Agregando estilos en línea a cada elemento: style={ }
      <p style={ {color: "blueviolet", fontSize: 25} }>Hola GenMx</p>
      Agregando estilos desde una constante 
      <p style={ pStyle } >Bienvenidos</p>*/}

      <div className='button--container'>
        <Button label='Soy un botón' />
        <Button label='Segundo botón' />
        <Button label='Último botón' />
      </div>

      <Products />
      < Footer />
    </>
  )
}


export default App
