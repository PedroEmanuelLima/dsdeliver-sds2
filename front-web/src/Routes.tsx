import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Componets/Navbar";

import Home from "./views/Home";
import Order from "./views/Order";

export default function Routes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/orders">
                    <Order />
                </Route>
                
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}