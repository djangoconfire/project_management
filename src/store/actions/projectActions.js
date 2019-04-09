export const createProject = (project) => {
    return {
        type : 'CREATE_PROJECT',
        project

    }
}

export const deleteProject = (id) => {
    return {
        type : 'DELETE_PROJECT',
        id

    }
}