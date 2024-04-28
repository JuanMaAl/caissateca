import create from 'zustand'

//Se almacenan los datos de los libros del usuario conectado.
//Se usan en la elaboración de la tabla del Home.

export const useCollectionStore = create((set) => ({
    collection: [],
}))