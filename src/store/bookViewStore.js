import create from 'zustand'

//Almacena los datos para la vista detallada del libro
//También se usa el bookId para la eliminación del libro

export const useBookViewStore= create((set) => ({
    book: [],
    bookId: 0,
}))