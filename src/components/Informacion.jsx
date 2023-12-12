

const Informacion = (props) => {
  //aqui va la lágica del componente
  return (
    //aqui puede ir un poco de lógica
    <>
      <h2>Conceptos de React {props.comision}</h2>
    <section className="container">
      {/* aqui va todo el maquetado del componente */}
      <p>React es una biblioteca de JavaScript utilizada para construir interfaces de usuario interactivas y reutilizables. Desarrollada por Facebook, React se centra en la creación de componentes individuales que representan partes específicas de una interfaz de usuario. Estos componentes se pueden combinar para formar interfaces complejas.<br/> comision: {props.anioActualprops}

      </p>
    </section>
    </>
  );
};

export default Informacion;