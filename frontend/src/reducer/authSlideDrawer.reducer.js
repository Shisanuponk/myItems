const initialState = { auth: false }

const authDrawerReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'openAuthDrawer':
            return localStorage.getItem('jwt') ? { auth: false } : { auth: true }
        case 'closeAuthDrawer':
            return { auth: false }
        default:
            throw new Error()
    }
}

export default authDrawerReducer