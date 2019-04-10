const initialState = {
    authError : null
}

export const authReducer = (state=initialState , action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authError : null
            }

        case 'LOGIN_ERROR':
            return {
                ...state,
                authError : 'Login Failed'
            }
        
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                authError : null
            }
        
        case 'SIGNUP_ERROR':
            return {
                ...state,
                authError : action.err
            }
        
        case 'SIGNOUT_SUCCESS':
            return {
                ...state,
                authError : null
            }
        
        default:
            return state
    }
}


export default authReducer