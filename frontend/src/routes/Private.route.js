import { Redirect, Route } from "react-router";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
        {...rest}
        render={
            (props) => {
                localStorage.getItem("jwt") ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        }

        />
    )
}

export default PrivateRoute