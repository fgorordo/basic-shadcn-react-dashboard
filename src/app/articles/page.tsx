import { PageLayout } from '../_components';
import { ArticlesDataTable } from './_components/data-table';




export default function News() {
  return (
    <PageLayout description='Consulta, edita o elimina los artículos existentes. Puedes mantener tu contenido actualizado desde esta sección. Para crear uno nuevo, haz click en el boton "Nuevo".' title='Gestión de noticias y artículos'>
      <ArticlesDataTable />
    </PageLayout>
  );
}
