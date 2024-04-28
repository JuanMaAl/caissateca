import create from 'zustand'

//Almacena los datos name y idUser del token de acceso

export const useTokenStore = create((set) => ({
    name: '',
    idUser: '',
}))