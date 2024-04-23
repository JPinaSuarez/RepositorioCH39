import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div id="footer--sections">
                    <section className="f--section">Sobre nosotros
                        <a href="" target="_blank">Historia</a>
                        <a href="" target="_blank">Misión</a>
                        <a href="" target="_blank">Visión</a>
                    </section>
                    <section className="f--section">Menú
                        <a href="" target="_blank">Nasa</a>
                        <a href="" target="_blank">Astros</a>
                        <a href="" target="_blank">ISS</a>
                    </section>
                    <section className="f--section">Legales
                        <a href="" target="_blank">Aviso de privacidad</a>
                        <a href="" target="_blank">T&C</a>
                        <a href="" target="_blank">Cookies</a>
                    </section>
                </div>
                <div id="copyright">
                    <p>&copy; Derechos reservados. 2024</p>
                </div>
            </footer>
        </>
    )
}

export default Footer