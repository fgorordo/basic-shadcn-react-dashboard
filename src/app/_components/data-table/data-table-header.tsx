import { Input } from '@/components/ui/input'
import { Table } from '@tanstack/react-table'
import { PropsWithChildren } from 'react';

interface DataTableHeaderProps<TData> extends PropsWithChildren {
    table: Table<TData>
    inputPlaceholder: string;
    filterCriteria: string;
    className?: string;
}

export function DataTableHeader<TData>({ table, inputPlaceholder, filterCriteria, children, className }: DataTableHeaderProps<TData>) {
    return (
        <div className={`flex items-center py-4 ${className}`}>
            <Input
                placeholder={inputPlaceholder}
                value={(table.getColumn(filterCriteria)?.getFilterValue() as string) ?? ""}
                onChange={(event) =>
                    table.getColumn(filterCriteria)?.setFilterValue(event.target.value)
                }
                className="max-w-sm"
            />
            {children}
        </div>
    )
}