import api from '../api/supabase'

export async function useDeleteBook(bookID){
    console.log(bookID + "esteeste")
    const { data, error } = await api
    .from('collection')
    .delete()
    .eq('id', bookID)
}