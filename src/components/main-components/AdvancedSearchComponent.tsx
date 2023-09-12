import { faBroom, faXmark } from "@fortawesome/free-solid-svg-icons"
import { Button } from "../buttons"
import { TitleCustom } from "../content"
import { Input } from "../inputs"
import { UserTable } from "../tables"
import { useAdvancedSearchComponent } from "../../hooks/main-components"

export const AdvancedSearchComponent = () => {

  const { onCloseAdvancedSearch } = useAdvancedSearchComponent()

  return (
    <section className="flex flex-col gap-2 p-4">
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

        <div className="self-end flex gap-2">
          <Button
            text="limpiar"
            title="Limpiar usuarios"
            icon={faBroom}
            className="border-blue-950 hover:bg-blue-300 focus:bg-blue-300"
            spanClassName="text-blue-600 font-medium group-hover:text-white group-focus:text-white"
            iconClassName="text-sm text-blue-600 group-hover:text-white group-focus:text-white"
          />
          <Button
            text="cancelar"
            title="Cerrar busqueda avanzada"
            icon={faXmark}
            className="bg-red-900 hover:bg-red-600"
            spanClassName="text-white font-medium"
            iconClassName="text-white"
            onClick={onCloseAdvancedSearch}
          />
        </div>
      </div>
    </section>
  )
}
