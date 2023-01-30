//import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/Testimonio';
function App() {
  var testimonio = "I've always struggled with learning JavaScript. ";
  testimonio += "I've taken many courses but freeCodeCamp's course was the one which stuck. "
  testimonio +="Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence";
  testimonio +="I needed to land my dream job as a software engineer at Spotify."
  return (
    <div className="App">
      <div className="contenedor-principal">


        <h1>
          Here is what our alumni say about freeCodeCamp:
        </h1>
        <Testimonio
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='Shawn'
          descripcionAlt='shawn'
          cargo='Ingeniero de Software'
          empresa='Amazon'
          testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'
        />
         <Testimonio
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='Sarah'
          descripcionAlt='sarah'
          cargo='Ingeniera de Software'
          empresa='ChatDesk'
          testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'
        />

  

        <Testimonio
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='Emma'
          descripcionAlt='emma'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio={testimonio}
        />


      </div>
    </div>
  );
}

export default App;
