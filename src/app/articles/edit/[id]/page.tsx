"use client";

import { PageLayout } from '@/app/_components';
import { useParams } from 'next/navigation'
import { ArticleForm } from '../../_components';
import { seedArticles } from '../../model/article.model';

export default function EditArticle() {

    const {id} = useParams();
    const data = seedArticles.find(ele => ele.id === id) // Server action from DB
    

    return (
        <PageLayout title='Editar noticia/artículo existente' description='Modificá la información y el contenido del artículo seleccionado. Una vez que termines, guardá los cambios para actualizar el artículo. Podés volver a editarlo en cualquier momento si lo necesitás.'>
            <ArticleForm update currentData={data}/>
        </PageLayout>
    )
}