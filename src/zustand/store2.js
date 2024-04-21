// import create from 'zustand'
// import { supabase } from '../client'
// import { useEffect } from 'react'

// export const useAuthStore = create ((set) => ({
//     user: null,
//     setUser: user => set({user}),
//     signIn: async(email, password)=> {
//         const {user, error} = await supabase.auth.signIn({email, password})
//         if (error) {
//             throw error
//         }
//         set({user}
//         ) 
//     },
//     signOut: async()=> {
//         const {error} = await supabase.auth.signOut()
//         if (error) {
//             throw error
//         }
//         set({user: null})
//     },

// }))

// export function AuthSubscriber() {
//     const setUser = useAuthStore((state) => state.setUser)
  
//     useEffect(() => {
//       const subscription = supabase.auth.onAuthStateChange((_event, session) => {
//         setUser(session?.user || null);
//       })
  
//       return () => {
//         subscription.data?.unsubscribe();
//       }
//     }, 
//     [setUser])
  
//     return null
//   }