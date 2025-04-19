"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, UseFormReturn } from "react-hook-form";

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea';
import { CustomFormGrid } from '@/app/_components';


enum FormErrorMessages {
    REQUIRED = "Debes ingresar ",
    TITLE_REQUIRED = REQUIRED+"un titulo.",
    TITLE_MIN_LENGTH = "El titulo debe tener como mínimo 2 caracteres.",
    TITLE_MAX_LENGTH = "El titulo debe tener como máximo 100 caracteres.",
    BODY_REQUIRED = REQUIRED+"contenido para la noticia.",
    IMAGE_URL_REQUIRED = REQUIRED + "una url para la portada",
    IMAGE_URL_REGEX = "La direccion debe ser una url válida.",
}


const formSchema = z.object({
    title: z.string().nonempty(FormErrorMessages.TITLE_REQUIRED).min(2,FormErrorMessages.TITLE_MIN_LENGTH).max(100, FormErrorMessages.TITLE_MAX_LENGTH),
    body: z.string().nonempty(FormErrorMessages.BODY_REQUIRED),
    author: z.string(),
    imageURL: z.string().nonempty(FormErrorMessages.IMAGE_URL_REQUIRED).url(FormErrorMessages.IMAGE_URL_REGEX),
    id: z.string().optional(),
    //TODO: TAGS && Errors Messages
})

const defaultValues: z.infer<typeof formSchema> = {
    author: "",
    body: "",
    imageURL: "",
    title: "",
    id: undefined,
}

interface NewsFormProps {
    update?: boolean,
    currentData?: z.infer<typeof formSchema>,
}


const ManageArticleForm = ({ form, update }: { form: UseFormReturn<z.infer<typeof formSchema>>, update: boolean }) => {
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit((form) => console.log(form))} className="">
                <CustomFormGrid>
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem className='col-span-2'>
                                <FormLabel>Titulo</FormLabel>
                                <FormControl>
                                    <Input placeholder="Titulo del articulo" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="imageURL"
                        render={({ field }) => (
                            <FormItem className=''>
                                <FormLabel>URL de foto de portada</FormLabel>
                                <FormControl>
                                    <Input placeholder="https://google.com/foto" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="author"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Autor</FormLabel>
                                <FormControl>
                                    <Input placeholder="Nombre del autor" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="body"
                        render={({ field }) => (
                            <FormItem className='md:col-span-2'>
                                <FormLabel>Articulo</FormLabel>
                                <FormControl>
                                    {/* <Input placeholder="https://google.com/foto" {...field} /> */}
                                    <Textarea {...field} placeholder='Body placeholder' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <Button type="submit" className='md:col-span-2 md:max-w-3xs md:place-self-end'>{update ? "Guardar cambios" : "Crear articulo"}</Button>
                </CustomFormGrid>
            </form>
        </Form>
    );
}

export const ArticleForm = ({ update = false, currentData }: NewsFormProps) => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: update ? currentData : defaultValues,
    })



    return (<ManageArticleForm form={form} update={update}/>);
}