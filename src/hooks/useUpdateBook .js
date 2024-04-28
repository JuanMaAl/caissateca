import api from '../api/supabase'

export async function useUpdateBook(bookID, titulo, editorial, autor, tema){
    console.log(bookID)
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