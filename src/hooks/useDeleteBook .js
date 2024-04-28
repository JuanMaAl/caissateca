import api from '../api/supabase'

//Elimina la fila del libro actual en la BBDD

export async function useDeleteBook(bookID){
    //console.log(bookID)
    const { data, error } = await api
    .from('collection')
    .delete()
    .eq('id', bookID)
}