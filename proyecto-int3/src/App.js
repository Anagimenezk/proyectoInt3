import React from 'react';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
//import Card from './components/Card/Card';


// por que el h3 lo habian puesto en el footer? lo cambie al header pero igual esta mal..


function App() {
  return (
   <div className="App">
     <Header filtrarAlbumes={(textoAFiltrar)=> this.filtrarAlbumes(textoAFiltrar)}/>  
    
    <h3 className = "h3"> Canciones populares </h3> 
     
    <Main/>
    <Footer/>
      <div className = "card-container"></div>

    

    </div>

  );

}





export default App;
