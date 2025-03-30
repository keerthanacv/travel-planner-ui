import { createSlice } from '@reduxjs/toolkit'; 

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        id: null,
        userName: '',
        fullName: '',
        email: '',
        roleDetails: null,
        branchDetails: null,
        accessToken: '',
        moduleList: [],
        isAuthenticated: false,
    },
    reducers:{
        authenticateUser(state,action){
            const accessToken = action.payload.accessToken;
            
            state.accessToken = accessToken
        }
    }
})

export const authActions = authSlice.actions;
export default authSlice;