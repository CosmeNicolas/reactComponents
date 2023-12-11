import Informacion from "./components/Informacion"
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <section>
      <h1 className="display-3 text-center">Proyecto de React</h1>
      <Informacion/>
      <Informacion/>
    </section>
  )
}

export default App
