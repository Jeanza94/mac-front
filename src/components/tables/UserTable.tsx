

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
          <th className="border-e-2 p-2">Acción</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className="text-center border-e-2">cedula</td>
          <td className="text-center border-e-2">1231414</td>
          <td className="text-center border-e-2">jean</td>
          <td className="text-center border-e-2">zapata</td>
          <td className="text-center border-e-2">acciones</td>
        </tr>
      </tbody>
    </table>
  )
}
