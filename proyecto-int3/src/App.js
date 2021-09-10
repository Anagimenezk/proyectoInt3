import React from 'react';
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css';



function App() {
  return (
   <div className="App">
     <Header filtrarAlbumes={(textoAFiltrar)=> this.filtrarAlbumes(textoAFiltrar)}/>  
    <Main/>
    <Footer/>
      <div className = "card-container"></div>

    <h3 className = "h3"> Canciones populares </h3>

    </div>
  );
}

export default App;
