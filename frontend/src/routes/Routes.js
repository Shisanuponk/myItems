import React from 'react'
import { Switch, Route } from 'react-router'

// Private Routing
import PrivateRoute from './Private.route'
import MerchantRoute from './Merchant.route'

// Public Screen
import Home from '../screens/Home/Home'
import Market from '../screens/Store/Store'
import Merchant from '../screens/Merchant'
import Help from '../screens/Support'
import ViewItem from '../screens/ViewItem/ViewItem'
import Cart from '../screens/Cart'

// Private Screen
import MerchantMode from '../screens/private/MerchantMode'
import Profile from '../screens/private/Profile/Profile'
import Wishlist from '../screens/Wishlist'
import Purchase from '../screens/private/Purchase'

const Navigator = () => {
    return (
        <Switch>

            {/* Private Route */}
            <PrivateRoute path="/profile" exact component={Profile} />
            <PrivateRoute path="/wishlist" exact component={Wishlist} />
            <PrivateRoute path="/purchase" exact component={Purchase} />

            {/* Merchant Route */}
            <MerchantRoute path="/dashboard" exact component={MerchantMode} />

            {/* Public Route */}
            <Route path="/" exact component={Home} />
            <Route path="/store" exact component={Market} />
            <Route path="/item=:itemId" exact component={ViewItem} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/merchant" exact component={Merchant} />
            <Route path="/help" exact component={Help} />

            {/* HTTP 404 Page Not Found */}
            <Route path="*" exact>
                <p>404 Page not found</p>
            </Route>

        </Switch>
    )
}

export default Navigator
