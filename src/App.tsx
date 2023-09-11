import { Button } from "./components/buttons"
import { Input } from "./components/inputs"


const App = () => {
  return (
    <main className="p-4">
      <h1
        className="text-2xl font-semibold"
      >
        Administrador de personas
      </h1>
      <h3
        className={`
          capitalize text-white font-bold ps-4 py-2 rounded-s-full rounded-e-full 
          bg-gradient-to-r from-green-500 via-blue-800 to-sky-400
        `}
      >
        información
      </h3>

      <form className="flex gap-4">
        <label className="flex flex-col gap-1">
          <span>Tipo de documento</span>
          <Input
            type="text"
            placeholder="cedula de ciudadania"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span>Número del documento</span>
          <Input 
            type="number" 
            placeholder="934893730384"
          />
        </label>

        <Button 
          text="buscar"
          title="Buscar persona"
        />

        <Button 
          text="busqueda avanzada"
          title="Abrir opciones de busqueda avanzada"
        />
      </form>
    </main>
  )
}

export default App