

const Informacion = ({comision, anioActualprops}) => {
  //aqui va la lágica del componente
  return (
    //aqui puede ir un poco de lógica
    <>
      <h2 className="text-center">Conceptos de React {comision}</h2>
    <section className="container">
      {/* aqui va todo el maquetado del componente */}
      <p>React es una biblioteca de JavaScript utilizada para construir interfaces de usuario interactivas y reutilizables. Desarrollada por Facebook, React se centra en la creación de componentes individuales que representan partes específicas de una interfaz de usuario. Estos componentes se pueden combinar para formar interfaces complejas.<br/> comision: {anioActualprops}

      </p>
    </section>
    </>
  );
};

export default Informacion;