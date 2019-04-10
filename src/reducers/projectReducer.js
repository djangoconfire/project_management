const initialState = {}

const projectReducer = (state=initialState , action) => {
    switch(action.type){
        case 'CREATE_PROJECT_SUCCESS':
            console.log("project created successfully")
            return state
        
        case 'CREATE_PROJECT_ERROR':
            console.log("create project error occured")
            return state
        default:
            return state
    }
    
}

export default projectReducer