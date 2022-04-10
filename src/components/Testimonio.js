const Testimonio = (props) => {
  return (
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require('../images/testimonio-emma.png')}
        alt="imagen de Emma" />
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>Emma Bostian en Suecia</p>
          <p className='cargo-testimonio'>Ingeniera de Software en Spotify</p>
          <p className='texto-testimonio'></p>
        </div>
    </div>
  );
}

export default Testimonio;