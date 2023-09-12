import { IconButton } from "../buttons"
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

export const UserTable = () => {
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
        <tr>
          <td className="text-center border-e-2 p-1">cedula</td>
          <td className="text-center border-e-2 p-1">1231414</td>
          <td className="text-center border-e-2 p-1">jean</td>
          <td className="text-center border-e-2 p-1">zapata</td>
          <td className="flex justify-center items-center gap-2">
              <IconButton
                icon={faPenToSquare}
                title="Editar usuario"
              />
              
              <IconButton
                icon={faTrash}
                title="Eliminar usuario"
                className="bg-red-900 hover:bg-red-600"
              />
            
          </td>
        </tr>
      </tbody>
    </table>
  )
}
