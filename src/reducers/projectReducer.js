const initialState = {
    projects : [
        {id : 1 , title : "Fill Rate Intelligence" , content : 'blah blah blah'},
        {id : 2 , title : "Fleet Health Intelligence" , content : 'blah blah blah'},
        {id : 3 , title : "Asset Health Intelligence" , content : 'blah blah blah'}
    ]
}

const projectReducer = (state=initialState , action) => {
    console.log(action)
    switch(action.type){
        case 'CREATE_PROJECT' : {
            const newProjects = [...state.projects,action.project]
            return {
                ...state,
                projects : newProjects
            }
        }
        case 'DELETE_PROJECT': {
            const newProjects = state.projects.filter(proj => proj.id !== action.id)
            return {
                ...state,
                projects : newProjects
            }
        }
        default:
            return state
    }
    
}

export default projectReducer