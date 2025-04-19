import { PageLayout } from '@/app/_components';
import { ArticleForm } from '../_components';

export default function CreateArticle() {
    return (
        <PageLayout title='Crear nueva noticia/articulo.' description='Ingresa la información del articulo y su contenido para crear un nuevo articulo. Al finalizar presiona el botón de "Crear articulo". Si te encuentras un error luego no importa, puedes volver a modificar este articulo una vez ya creado.'>
            <ArticleForm />
        </PageLayout>
    )
}