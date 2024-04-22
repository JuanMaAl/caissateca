import create from 'zustand'

export const useTokenStore = create((set) => ({
    name: '',
    idUser: '',
    thead: false,
}))