import api from '../api/supabase'

//Actualiza las propiedades de la fila correspondiente al libro actual

export async function useUpdateBook(bookID, titulo, editorial, autor, tema){
    //console.log(bookID)
    const { data, error } = await api
    .from('collection')
    .update({
        titulo: titulo, 
        editorial: editorial,
        autor: autor,
        tema: tema,
    })
    .eq('id', bookID)
}