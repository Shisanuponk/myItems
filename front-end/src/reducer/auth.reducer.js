
const AuthReducer = (state = { authData: null }, action) => {
    switch (action.type){
        case AUTH:
            localStorage.setItem()
            return {...state, authData: action?.data}
        case LOGOUT:
            localStorage.clear()
            return {...state, authData: null}
        default:
            return state;
    }
}

export default AuthReducer