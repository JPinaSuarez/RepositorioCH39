import './Products.css'

/**
 * Props estructurados. Mediante la palabra reservada `props` como argumento de la función, vamos a declarar métodos que provengan de props y que cumplirán la función de propiedad para los diferentes elementos.
 * La palabra `props` como argumento no debe ir entre llaves
 * Es decir, `props.propiedad`
 */
/*
const Products = ( props ) => {
    return(
        <>
        <div className='card--container'>
            <div className='products--card'>
                <img src={ props.img } alt="" />
                <h3>{ props.name }</h3>
                <p>{ props.description }</p>
                <h2>{ props.price }</h2>
            </div>
        </div>
        </>
    )
}
*/


/**
 * Props desestructurados. En vez de utilizar la palabra props y los métodos específicos, paso dichos métodos como argumentos de la función
 */

const Products = ({ img, name, description, price }) => {
    return(
        <>
        <div className='card--container'>
            <div className='products--card'>
                <img src={ img } alt="" />
                <h3>{ name }</h3>
                <p>{ description }</p>
                <h2>{ price }</h2>
            </div>
        </div>
        </>
    )
}

export default Products