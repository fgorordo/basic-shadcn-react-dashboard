"use client";
import { ColumnFiltersState, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import { DataTable, DataTableHeader, DataTablePagination } from '@/app/_components';
import { Article, seedArticles } from '../model/article.model';
import { articleDataTableColumns } from './columns';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlusCircleIcon } from 'lucide-react';
import { DashboardRoutes } from '@/models';

export const ArticlesDataTable = () => {

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])


  const table = useReactTable<Article>({
    data: seedArticles,
    columns: articleDataTableColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    }
  })

  return (
    <>
      <DataTableHeader inputPlaceholder='Buscar por titulo' filterCriteria='title' table={table} className='justify-between'>
        <Button asChild><Link href={`/${DashboardRoutes.ARTICLES}/create`}>Nuevo<PlusCircleIcon/></Link></Button>
      </DataTableHeader>
      <DataTable tableConfig={table} columns={articleDataTableColumns} />
      <DataTablePagination table={table}/>
    </>
  )
}