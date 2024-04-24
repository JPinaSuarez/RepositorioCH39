import './Astro.css'

const Astro = ({ name, craft }) => {
    return(
        <>
            <div className='astro--container'>
                <h3 className='astro--name'>{ name }</h3>
                <p className='astro--craft'>{ craft }</p>
            </div>
        </>
    )
}

export default Astro