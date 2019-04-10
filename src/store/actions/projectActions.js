// Here is the list of Action Creator
export const createProject = (project) => {
    // here i'm halting the dispatch action through some middleware - thunk
    return (dispatch, getState , {getFirestore}) =>    {
        // make a async call to database
        const firestore = getFirestore() // creating instance of firebase database 
        firestore.collection('projects').add(
            {
                ...project,
                authorFirstName : 'Ritu',
                authorLastName : 'Raj'
            }
        ).then(() => {
            dispatch({type : 'CREATE_PROJECT_SUCCESS' , project})
        }).catch((err) => {
            dispatch({type : 'CREATE_PROJECT_ERROR' , err})
        })
    }
}

export const deleteProject = (id) => {
    return {
        type : 'DELETE_PROJECT',
        id

    }
}