import { useContext } from 'react'
import { Modal } from "./components/modals"
import { UserContext } from "./context/users"
import { AdvancedSearchComponent, SimpleSearchComponent } from './components/main-components'

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

    </main>
  )
}

export default App