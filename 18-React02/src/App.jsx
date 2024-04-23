import Navbar from './components/navbar/Navbar'
import './App.css'
import Footer from './components/footer/Footer'
import Button from './components/button/Button'
import Products from './components/products/Products'
import Astros from './components/Astros/Astros'
import Landing from './components/landing/Landing'

  // Estilos como constante que contiene un objeto
  const pStyle = {
    color: "yellow",
    fontSize: "21px",
    fontFamily: "cursive",
  }

  const urlTenisMorados = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
  const urlTenisDark = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747"
  const urlTenisCamel = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437"

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

      <Products 
        img={ urlTenisMorados }
        name="Tenis morados"
        description="Tenis morados hechos en México"
        price="$ 2,599.00"
      />

      <Products 
        img={ urlTenisDark }
        name="Tenis negros"
        description="Tenis negros fabricados en Vietnam"
        price="$ 999.00"
      />

      <Products 
        img={ urlTenisCamel }
        name="Tenis camello"
        description="Tenis color camello (beige)"
        price="$ 21,565.00"
      />

      <hr />
      <Astros />
      <hr />

      <h2 style={{ color: "#fff176" }}>Material UI Component</h2>
      <Landing />
      < Footer />
    </>
  )
}


export default App
