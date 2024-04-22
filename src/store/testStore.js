import create from 'zustand'

export const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
  dBCollection: {},
  libros: 5,
  updateLibros: (newLibros) => set({ libros: newLibros })
}))