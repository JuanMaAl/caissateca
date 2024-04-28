import api from '../api/supabase'
import { useTokenStore } from '../store/tokenStore';

//Crea una nueva entrada en la BBDD con los valores del formulario

export async function useCreateBook(titulo, editorial, autor, tema){
    const userId = useTokenStore.getState().idUser
    //console.log(userId)

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