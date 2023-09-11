

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
        <label className="flex flex-col">
          <span>Tipo de documento</span>
          <input
            type="text"
            placeholder="cedula de ciudadania"
            className="border-2 p-1 rounded-lg"
          />
        </label>

        <label className="flex flex-col">
          <span>Número del documento</span>
          <input 
            type="number" 
            placeholder="934893730384"
          />
        </label>

        <button>
          buscar
        </button>

        <button>
          busqueda avanzada
        </button>
      </form>
    </main>
  )
}

export default App