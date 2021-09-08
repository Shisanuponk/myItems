import React from 'react'
import { Switch, Route } from 'react-router'

// Screen
import Home from '../screens/HomeSceen/Home'
import Store from '../screens/Store/Store'
import Merchant from '../screens/Merchant'
import Support from '../screens/Support'
import Cart from '../screens/Cart'
import ViewItem from '../screens/ViewItem/ViewItem'

const Navigator = () => {
    return (
        <Switch>

            <Route path="/" exact>
                <Home />
            </Route>

            <Route path="/store" exact>
                <Store />
            </Route>

            <Route path="/item=:itemId" exact>
                <ViewItem />
            </Route>

            <Route path="/merchant" exact>
                <Merchant />
            </Route>

            <Route path="/support" exact>
                <Support />
            </Route>

            <Route path="/profile=:userId" exact>
                <h1>User Profile</h1>
            </Route>

            <Route path="/cart" exact>
                <Cart />
            </Route>

            <Route path="/wishlist" exact>
                {/* <Favorite /> */}
            </Route>

            <Route path="*" exact>
                <p>404 Page not found</p>
            </Route>

        </Switch>
    )
}

export default Navigator
