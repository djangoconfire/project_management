// Login the user action creator
export const signIn = (credentials) => {
    return(dispatch , getState , {getFirebase}) => {
        // make Async call to database
        const firebase = getFirebase()
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type : 'LOGIN_SUCCESSS'})
        }).catch((err) => {
            dispatch({type : 'LOGIN_ERROR', err})
        })

    }
}

// Logout the  user action creator 
export const signOut = () =>{
    return(dispatch,getState, { getFirebase}) =>{
        const firebase = getFirebase()
        // make signout 
        firebase.auth().signOut()
        .then(()=> {
            dispatch({type : 'SIGNOUT_SUCCESS'})
        })
    }
}

// New User Action Creator
export const signUp = (newUser) => {
    return(dispatch,getState , {getFirebase , getFirestore}) => {
        const firebase = getFirebase()
        const firestore = getFirestore()

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then(res => {
            return firestore.collection('users').doc(res.user.uid).set({
                firstName : newUser.firstName,
                lastName : newUser.lastName,
                initials : newUser.firstName + newUser.lastName
            }).then(() => {
                dispatch({ type : 'SIGNUP_SUCCESS'})
            }).catch((err) => {
                dispatch({type : 'SIGNUP_ERROR', err})
            })
        })
    }
}
