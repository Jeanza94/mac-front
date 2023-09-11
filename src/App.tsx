import { FormScreenOne } from "./components/forms"



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

      <FormScreenOne />
      
    </main>
  )
}

export default App