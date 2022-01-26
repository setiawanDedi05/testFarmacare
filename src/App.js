import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Home from './pages/home'
import Details from "./pages/details";
import { fetchPokemons} from "./redux/action";
import Summary from "./pages/summary";
import "./css/app.css"
const App = () => { 
    const dispatch = useDispatch()
    const { pokemons } = useSelector((state) => state)
    if (!pokemons.length) {
        dispatch(fetchPokemons())
    }
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/details/:id">
                <Details />
            </Route>
            <Route path="/summary">
                <Summary />
            </Route>
        </Switch>
    )
}

export default App