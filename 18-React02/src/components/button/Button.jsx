
/**
 * Props. Propiedades que se pueden asignar a los componentes. Se asignan como parámetros/argumentos para modificar el estado de un componente.
 * El nombre del props se asigna según lo necesario o con la palabra props.
 * Debemos encerrar el props entre llaves
 */

const Button = ({ label }) =>{
    return (
        <>
        <button>
            { label }
        </button>
        </>
    )
}

export default Button