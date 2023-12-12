import Informacion from "./components/Informacion"
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  //const [count, setCount] = useState(0)
  const  anioActual = 2023
  return (
    <section>
      <h1 className="display-3 text-center">Proyecto de React</h1>
      <Informacion comision='c76i' anioActualprops={anioActual}/>
      <Informacion/>
    </section>
  )
}

export default App
