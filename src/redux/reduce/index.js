import { ERROR, FETCH_POKEMON,LOADING } from "../actionType";

const initialState = {
    pokemons: [],
    loadingPokemons: true,
    errorPokemon: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POKEMON:
            return {...state, pokemons: action.payload}
        case LOADING:
            return { ...state, loadingPokemons: action.payload }
        case ERROR:
            return { ...state, errorPokemon: action.payload }
        default:
            return state
    }
}

export default reducer