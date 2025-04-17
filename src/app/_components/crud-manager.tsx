import { columns } from "../_sample/columns"
import { payments } from "../_sample/data"
import { DataTable } from "./data-table"

export const CrudManager = () => {
  return (
    <section>
        <h2 className="text-2xl font-semibold">{"{{Page Title}}"} - Administrador</h2>
        <DataTable columns={columns} data={payments} />
    </section>
  )
}