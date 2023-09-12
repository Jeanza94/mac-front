import { useContext } from 'react'
import { Modal } from "./components/modals"
import { UserContext } from "./context/users"
import { AdvancedSearchComponent, SimpleSearchComponent } from './components/main-components'
import { UserForm } from './components/forms'

const App = () => {

  const { isOpenAdvancedSearch } = useContext(UserContext)

  return (
    <main className="p-4">
      
      <SimpleSearchComponent />
      <Modal
        isOpen={isOpenAdvancedSearch}
      >
        <AdvancedSearchComponent />
      </Modal>

      <UserForm />

    </main>
  )
}

export default App