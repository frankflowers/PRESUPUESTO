//App.js
import React,{useState,useEffect, Fragment} from 'react';
import  Pregunta  from './components/Pregunta';
import  Formulario  from './components/Formulario';
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {

//definir el state
const [presupuesto,guardarPresupuesto]= useState(0);
const [restante, guardarRestante] = useState(0);
const [mostrarpregunta,actualizarPregunta]= useState(true);
const [gastos,guardarGastos]= useState([]);
const [gasto,guardarGasto]= useState([]);
const [creargasto, guardarCrearGasto] = useState(false);
// usEffect que actualice le restante
useEffect(() => {
  if(creargasto){ 
  guardarGastos([
    ...gastos,
    gasto
  ]);
//resta del presupuesto actual
const presupuestoRestante = restante - gasto.cantidad;
guardarRestante(presupuestoRestante);
  //resetear false
  guardarCrearGasto(false);
}
}, [gasto,creargasto,gastos,restante])




  return (
    <Fragment>
  <div className= 'container'>
    <header>
      <h1>Gasto semanal</h1>
    
    <div className= 'contenido-principal contenido'>
    {mostrarpregunta ? 
    (
    <Pregunta 
      guardarPresupuesto={guardarPresupuesto}
      guardarRestante={guardarRestante}
      actualizarPregunta={actualizarPregunta}
      />
    ) :
    (
 <div className="row">
  <div className= "one-half column">
      <Formulario
      guardarGasto={guardarGasto}
      guardarCrearGasto={guardarCrearGasto}
      
      
      />
  </div>
  
  <div className="one-half column">
    <Listado
    gastos={gastos}
    />
    <ControlPresupuesto
    presupuesto={presupuesto}
    restante= {restante}
    />
    </div>
  </div> 
  
        
        )
        }

    </div>
     </header>
  </div>
  </Fragment>
  );
    }

export default App;
