import axios from "axios"
import {create} from "zustand"

const initialState = {
    loading: false,
    succes: false,
    error: false,
    data: null,
    errorData: null,
}

const useGetData = create ((set, get) => ({
    ...initialState,

    execute: async () => {
        set({...initialState, loading: true})
        try {
            const res = await axios.get("")
            set(
                {...initialState, 
                    succes: true, 
                    data: res.data
                }
            )
        } catch (err) {
            console.error("Error in data fetch:", err)
            set(
                {...initialState,
                    error: true,
                    errorData: err.message
                }
            )
        }
    }


}))

export default useGetData