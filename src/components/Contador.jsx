//crear estados , "use"
import { useState } from "react";

const Contador = () => {
  /* agregar lógica */
  const [numero, setNumero] = useState(10)
  //let numero = 10;



  return (
    <div>
      <article className="text-center">
        <h2>Contador</h2>
        <p>{numero}</p>
        <button className="btn btn-primary" 
        onClick={()=> setNumero(numero +1 )}>
          +1
          </button>
      </article>
    </div>
  );
};

export default Contador;