import './App.css';
import Navbar from './Components/Navbar';

function App() {
  let titulo = "ReactHouse";
  let descripcion = "El lugar que necesitabas para aprender a programar y cambiar tu vida laboral";
  let logo = "../public/reacthouse.png.png";

  return (
    <div>
      <Navbar />
      <div className="row" >
        <div class="text-center izquierda pt-3">
          <img src={logo} alt={titulo} width="370px" className="img-fluid logoreact" />
          <h1 class="mt-2"> {titulo} </h1>
          <p> {descripcion} </p>
          <button class="botonIngreso"> Ingresar </button>
        </div>
    </div> 
  </div>
  );
}

export default App;
