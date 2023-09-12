import { useContext } from 'react'
import { Modal } from "./components/modals"
import { UserContext } from "./context/users"
import { AdvancedSearchComponent, SimpleSearchComponent } from './components/main-components'
import { UserForm } from './components/forms'

const App = () => {

  const { isOpenAdvancedSearch, isOpenUserForm, currentUser } = useContext(UserContext)

  return (
    <main className="p-4 flex flex-col gap-4">
      
      <SimpleSearchComponent />
      <Modal
        isOpen={isOpenAdvancedSearch}
      >
        <AdvancedSearchComponent />
      </Modal>
      <hr />

      {
        currentUser && isOpenUserForm && (
          <UserForm />
        )
      }

    </main>
  )
}

export default App