import './App.css';

function App() {
  let titulo = "ReactHouse";
  let descripcion = "El lugar que necesitabas para aprender a programar y cambiar tu vida laboral";
  let logo = "./reacthouse.png.png";

  return (
    <div className="container-fluid">
      <div className="row" >
        <div class="col-6 text-center izquierda pt-3">
          <img src={logo} alt={titulo} width="370px" className= "img-fluid logoreact" />
          <h1 class="mt-2"> {titulo} </h1>
          <p> {descripcion} </p>
          <button class="botonIngreso"> Ingresar </button>
        </div>
        <div class= "col-6 text-center derecha">
          <div class = "cuadroTexto">
            <p> Yo antes era empleado de comercio y trabajaba 60hs semanales </p>
            <p> Hasta que conoci {titulo} y vivo la vida que tanto soñe... </p>
            <h5>Steve Trabajos <h6>(alumno comision 013)</h6></h5>
          </div>
        <div class = "cuadroTexto">
            <p> Trabajamos duro entre todo el equipo de programadores </p>
            <p> para lograr una plataforma que no se cae NUNCA </p>
            <h5>Marcos ZUckeberg <h6>(super CEO de muchas empresas)</h6></h5>
      </div>
      </div>
    </div>
  </div>
  );
}

export default App;
