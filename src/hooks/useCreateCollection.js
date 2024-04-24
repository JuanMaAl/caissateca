import api from '../api/supabase'
import { useTokenStore } from '../store/tokenStore';


export async function useCreateCollection(titulo, editorial, autor, tema){
    const userId = useTokenStore.getState().idUser
    console.log(userId)

    const { error } = await api
    .from('collection')
    .insert({ 
        idUsuario: userId,
        titulo: titulo, 
        editorial: editorial,
        autor: autor,
        tema: tema,
     })

 
}