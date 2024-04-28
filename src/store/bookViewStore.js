import create from 'zustand'

export const useBookViewStore= create((set) => ({
    book: [],
    bookId: 0,
}))