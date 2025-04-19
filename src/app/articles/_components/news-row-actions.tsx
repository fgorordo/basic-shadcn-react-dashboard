"use client";

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { EyeIcon, MoreHorizontal, PencilIcon, Trash2Icon } from "lucide-react"
import { Article } from '../model/article.model'
import { useRouter } from 'next/navigation'
import { DashboardRoutes } from '@/models'

interface NewsRowActionsProps {
    data: Article
}

export const NewsRowActions = ({ data }: NewsRowActionsProps) => {

    const router = useRouter();

    const handleEdit = () => {
        router.push(`/${DashboardRoutes.ARTICLES}/edit/${data.id}`)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Abrir menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Opciones</DropdownMenuLabel>
                <DropdownMenuItem
                    onClick={() => console.log('Ver noticia')}
                >
                    <EyeIcon />
                    Ver noticia
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={handleEdit}
                >
                    <PencilIcon />
                    Editar Noticia
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={() => console.log('Eliminar noticia')}
                    className='text-red-500 hover:text-red-600!'
                >
                    <Trash2Icon className='text-red-500' />
                    Eliminar noticia
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}