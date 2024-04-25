import api from '../api/supabase'
import { useBookViewStore } from '../store/bookViewStore'


export async function useReadBook(bookID){
    const { data, error } = await api.from('collection')
    .select()
    .eq('id', bookID)
    console.log(data)
    useBookViewStore.setState( {book: data})
}