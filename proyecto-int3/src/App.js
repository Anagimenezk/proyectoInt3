import React from 'react';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
//import Card from './components/Card/Card';


// por que el h3 lo habian puesto en el footer? lo cambie al header pero igual esta mal..
//lo dejo comentado 

//<div>
    //<h3 className = "h3"> Albums populares </h3> 
    //<Card/>
//</div>
//probe y se rompe, algo estoy haciendo mal, lo dejo comentado



function App() {
  return (
   <div className="App">
       <Header filtrarAlbumes={(textoAFiltrar)=> this.filtrarAlbumes(textoAFiltrar)}/>  
     
       <Main/>
       <Footer/>

    </div>

  );

}


export default App;
