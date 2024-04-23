import './Navbar.css'
import logoNasa from '../../assets/NASA_logo.png'
import Button from '../button/Button';

const urlAstros = 'http://api.open-notify.org/astros.json';
const urlNasa = 'https://www.nasa.gov/';
const urlISS = 'https://www.nasa.gov/international-space-station/';

const Navbar = () => {
    return (
        <>
            <nav className="navbar--container">
                <div className="navbar--logo">
                    <img src={ logoNasa } alt="logo-nasa" className="navbar--logo" id="logo-nasa" />
                </div>
                <div className="navbar--menu">
                    <a href={ urlAstros } target="_blank">Astros</a>
                    <a href={ urlNasa } target="_blank">Nasa</a>
                    <a href={ urlISS } target="_blank">ISS</a>
                </div>
                <div className="navbar--search">
                    <input type="text" name="search" id="input--search" placeholder="Escríbe lo que estás buscando" />
                    {/* <button id="search--button">Buscar</button> */}
                    <Button label="Buscar" />
                </div>
            </nav>
        </>
    )
}

export default Navbar