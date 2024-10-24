
const Saludo = ({ nombre, children }) => {
    return (
        <>
            
            <h3>{children} {nombre}</h3>
            
        </>
    );
}

export default Saludo;