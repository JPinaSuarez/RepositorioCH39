import './Astros.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { useEffect, useState } from 'react';
import Astro from './Astro/Astro'

/* En el componente Astro.jsx vive la card */
// 1. Guardo el enlace de la API en una constante
const URL_ASTROS = 'http://api.open-notify.org/astros.json';

// 2. Inicializar mi componente (función general o flecha) 
const Astros = () => {

// 3. Definir useState
    const [astros, setAstros] = useState([]);

// 4. Implementar useEffect
    useEffect(() => {
        getAstros();
    }, []);

// 5. Crear función para consumir API
    const getAstros = () => {
        fetch(URL_ASTROS)
            .then(response => response.json())
            .then(data => setAstros(data.people))
            .catch(error => console.error('No se cumplió la promesa', error))
    }

    // console.log(astros); Lo utilicé para comprobar que si se estaba cumpliendo la promesa

    return (
        <>
            < Navbar />

            <h1>Astros API</h1>

            <div className='card--container'>
            {
                astros.map((astro, index) => (
                    <Astro key={index} {...astro} />
                ))
            }
            </div>

            < Footer />
        </>
    )
}

export default Astros