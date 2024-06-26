import api from '../api/supabase'
import { useTokenStore } from '../store/tokenStore';
import { useCollectionStore } from '../store/collectionStore';

//Lee todas las filas del usuario actual y las guarda en la Store.

export async function useReadCollection(){
    const userId = useTokenStore.getState().idUser
    //console.log(userId)
    const { data, error } = await api
    .from('collection')
    .select()
    .eq('idUsuario', userId)
    //console.log(data)
    useCollectionStore.setState( {collection: data})
}