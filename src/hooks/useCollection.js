import api from '../api/supabase'


export async function useFetchCollection(){
    const { data, error } = await api.from('collection').select()
    console.log({data})
    
}