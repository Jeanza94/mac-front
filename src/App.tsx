import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
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

      <form className="flex flex-wrap gap-4 items-end">
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
          type="submit"
          className="bg-blue-950 hover:bg-blue-600 focus:bg-blue-600"
          spanClassName="text-white font-medium"
          icon={faMagnifyingGlass}
          iconClassName="text-white text-sm"
        />

        <Button 
          text="busqueda avanzada"
          title="Abrir opciones de busqueda avanzada"
          className="border-blue-950 hover:bg-blue-300 focus:bg-blue-300"
          spanClassName="text-blue-600 font-medium group-hover:text-white group-focus:text-white"
          icon={faMagnifyingGlass}
          iconClassName="text-blue-600 group-hover:text-white group-focus:text-white"
        />
      </form>
    </main>
  )
}

export default App