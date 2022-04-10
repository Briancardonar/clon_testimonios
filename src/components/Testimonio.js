import '../stylesheets/Testimonio.css'

const Testimonio = (props) => {
  return (
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require(`../images/testimonio-${props.imagen}.png`)}
        alt={`foto de ${props.alt}`} />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio'>'{props.texto}'</p>
      </div>
    </div>
  );
}

export default Testimonio;