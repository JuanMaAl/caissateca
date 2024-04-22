import api from '../api/supabase'
import { useTokenStore } from '../store/tokenStore';
import { useCollectionStore } from '../store/collectionStore';


export async function useFetchCollection(){
    const userId = useTokenStore.getState().idUser
    console.log(userId)
    const { data, error } = await api.from('collection')
    .select()
    .eq('idUsuario', userId)
    console.log(data)
    useCollectionStore.setState( {collection: data})
}