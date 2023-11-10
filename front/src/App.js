import './App.css';
import React from 'react'; //si aparecia error al momento de ejecutar el front con "npm start"
import Header from './components/layout/Header';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <center>Contenido aquí</center>
      <center>Contenido aquí</center>
      <center>Contenido aquí</center>
      <center>Contenido aquí</center>
      <center>Contenido aquí</center>
      <center>Contenido aquí</center>
      <Footer />
      
    </div>
  );
}

export default App;

//<h1>Tienda Ey Digital Services</h1>
//<img src="./images/logoEyDigitalServicesSinFondo.png" alt="Aqui va el logo"></img>