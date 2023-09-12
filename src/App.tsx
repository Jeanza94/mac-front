import { useContext } from 'react'
import { FormScreenOne } from "./components/forms"
import { Modal } from "./components/modals"
import { UserContext } from "./context/users"
import { TitleCustom } from './components/content'
import { Input } from './components/inputs'
import { UserTable } from './components/tables'

const App = () => {

  const { isOpenAdvancedSearch } = useContext(UserContext)

  return (
    <main className="p-4">
      <h1
        className="text-2xl font-semibold"
      >
        Administrador de personas
      </h1>

      <TitleCustom
        text="información"
      />

      <FormScreenOne />
      <Modal
        isOpen={isOpenAdvancedSearch}
      >
        <div className="flex flex-col gap-2 p-4">
          <TitleCustom
            text="búsqueda avanzada"
          />
          <div className="bg-white p-4 rounded-lg flex flex-col gap-2">
            <label>
              <Input
                type="text"
                placeholder="Buscar"
              />
            </label>

            <UserTable />
          </div>
        </div>
      </Modal>

    </main>
  )
}

export default App