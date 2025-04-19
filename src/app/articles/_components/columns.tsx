import { ColumnDef } from '@tanstack/react-table'
import { Article } from '../model/article.model'
import { RowActions } from '@/app/_components'
import { NewsRowActions } from './news-row-actions'

export const articleDataTableColumns: ColumnDef<Article>[] = [
    {
        accessorKey: "title",
        header: "Titulo",
    },
    {
        accessorKey: "author",
        header: "Autor",
    },
    {
        accessorKey: "createdAt",
        header: "Fecha de creación",
    },
    {
        id: 'actions',
        cell: ({row}) => (<NewsRowActions data={row.original}/>)
    }
]