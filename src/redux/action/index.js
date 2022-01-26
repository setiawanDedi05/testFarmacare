import axios from "axios";
import { ERROR, FETCH_POKEMON, LOADING, SET_HISTORY } from "../actionType";
const URL = 'https://pokeapi.co/api/v2/'
export const fetchPokemons = () => {
    return async (dispatch) => {
        try {
            let { data } = await axios.get(URL + 'pokemon')
            data = data.results.map((el, i) => {
                el.stock = 0
                el.id = i+1
                el.history = [{id:1, time : new Date(), title: 'stock awal', id_pokemon : el.id, note: "", total: 0, stock_before:0 }]
                return el
            })
            dispatch({
                type: FETCH_POKEMON,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: true
            })
        } finally {
            dispatch({
                type: LOADING,
                payload: false
            })
        }
    }
}

export const setHistoryStock = (value) => {
    return (dispatch) => {
        dispatch({
            type: SET_HISTORY,
            payload:value
        })
    }
}
