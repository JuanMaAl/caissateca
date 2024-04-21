import create from zustand

export const useAuthStore = create ((set) => ({
    user: null,
    setUser: user => set({user}),
    signIn: async(email, password)=> {
        const {user, error} = await supabase.auth.signIn({email, password})
        if (error) {
            throw error
        }
        set({user}) 
    },
    signOut: async()=> {
        const {error} = await supabase.auth.signOut()
        if (error) {
            throw error
        }
        set({user: null})
    },

}))


// const [formData, setFormData] = useState({
//     email: '', password: ''
//   })