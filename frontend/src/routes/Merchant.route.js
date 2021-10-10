import { Redirect, Route } from "react-router";
import {getUser} from '../api/api'
const PrivateRoute = ({ component: Component, ...rest }) => {
    const isMerchant = async() => {
        const res = await getUser()
        if(res.data.authorities === "merchant")
            return true
        return false
    }
    return (
        <Route
        {...rest}
        render={
            (props) => {
                localStorage.getItem("jwt") && isMerchant() ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        }

        />
    )
}

export default PrivateRoute