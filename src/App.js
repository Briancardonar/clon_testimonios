import './App.css';
import Testimonio from './components/Testimonio';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      </div>
      <Testimonio
        imagen='shawn'
        nombre='Shawn Wang'
        pais='Singapur'
        cargo='Ingeniero de Software'
        empresa='Extiblu'
        texto='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.' />
      <Testimonio
        imagen='sarah'
        nombre='Sarah Chima'
        pais='Nigeria'
        cargo='Ingeniero de Software'
        empresa='Iblu'
        texto='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.' />
      <Testimonio
        imagen='emma'
        nombre='Emma Bostian'
        pais='Suecia'
        cargo='Ingeniero de Software'
        empresa='Planta 3'
        texto='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.' />
         <Testimonio
        imagen='brian1'
        nombre='Brian Cardona'
        pais='Colombia'
        cargo='Aprendiz de sistemas'
        empresa='Extiblu'
        texto='FreeCodeCamp es una plataforma genial, con métodos de enseñanza acordes a cualquier tipo de persona. He aprendido mucho gracias a ellos y agradezco  enormemente todo el conocimiento que aportan a la comunidad Dev.' />
    </div>
  );
}

export default App;
