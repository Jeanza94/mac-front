import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useUserTable } from "../../hooks/tables"
import { IconButton } from "../buttons"
import { faPenToSquare, faSpinner, faTrash } from '@fortawesome/free-solid-svg-icons'

export const UserTable = () => {

  const { editUser, usersAdvanced, deleteUserInDatabase, isDeletingUser } = useUserTable()


  return (
    <table
      className="border-2 w-full rounded-xl"
    >
      <thead
        className="border-b-2"
      >
        <tr>
          <th className="border-e-2 p-2">Tipo de documento</th>
          <th className="border-e-2 p-2">Número de documento</th>
          <th className="border-e-2 p-2">Primer nombre</th>
          <th className="border-e-2 p-2">Primer apellido</th>
          <th className="p-2">Acción</th>
        </tr>
      </thead>

      <tbody>
        {
          usersAdvanced.map(user => (
            <tr key={(user).id}>
              <td className="text-center border-e-2 border-b-2 p-1">{user.document_type}</td>
              <td className="text-center border-e-2 border-b-2 p-1">{user.document_number}</td>
              <td className="text-center border-e-2 border-b-2 p-1">{user.firstname}</td>
              <td className="text-center border-e-2 border-b-2 p-1">{user.surname}</td>
              <td className={`flex justify-center items-center gap-2  border-b-2`}>
                <IconButton
                  icon={faPenToSquare}
                  title={`Editar usuario ${user.firstname} ${user.surname}`}
                  onClick={() => editUser(user)}
                />

                {
                  isDeletingUser
                    ? <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                    : <IconButton
                      icon={faTrash}
                      title={`Eliminar usuario ${user.firstname} ${user.surname}`}
                      className="bg-red-900 hover:bg-red-600"
                      onClick={() => deleteUserInDatabase(user.id)}
                    />

                }

              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
