import { Input } from "@/components/ui/input"
import { Table } from "@tanstack/react-table"

interface DataTableSearchProps<TData> {
    table: Table<TData>
    placeholder: string;
    searchColumn: string;
}

export function DataTableSearch <TData> ({table,placeholder,searchColumn}:DataTableSearchProps<TData>) {
    return (
        <div className="flex items-center py-4">
            <Input
                placeholder={placeholder}
                value={(table.getColumn(searchColumn)?.getFilterValue() as string) ?? ""}
                onChange={(event) =>
                    table.getColumn(searchColumn)?.setFilterValue(event.target.value)
                }
                className="max-w-sm"
            />
        </div>
    )
}