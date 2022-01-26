import React from "react";
import Home from '../pages/home'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ERROR, FETCH_POKEMON, LOADING } from "../redux/actionType";
import { MemoryRouter } from 'react-router-dom'

const startState = {
    loadingPokemons: false,
    pokemons: [
        {
            "id":1,
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/",
            "stock" : 0
        }
    ],
    errorPokemons : false
}
function reducer(state = startState, action) {
    switch (action.type) {
        case FETCH_POKEMON:
            return { ...state, pokemons: action.payload }
        case LOADING:
            return { ...state, loadingPokemons: action.payload }
        case ERROR:
            return { ...state, errorPokemon: action.payload }
        default:
            return state
    }
}
function renderWithRedux(
    component, { initialState, store = createStore(reducer, initialState)} = {} 
    ) {
    return {
            ...render(<Provider store={store}>{component}</Provider>)
        }
}

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));

describe('Home', () => {
    test('has an h1 tag ', () => {
        const { getByTestId } = renderWithRedux(<Home />)
        expect(getByTestId("title")).toHaveTextContent("Stock Pokémon")
    })
    test('has an pokemon name', () => {
        const { getByTestId } = renderWithRedux(<Home />)
        expect(getByTestId("pokemon-name")).toHaveTextContent("bulbasaur")
    })
    test('has an stock of pokemon ', () => {
        const { getByTestId } = renderWithRedux(<Home />)
        expect(getByTestId("pokemon-stock")).toHaveTextContent("0")
    })
    test('Click data pokemon', () => {
        
        const { getByText } = renderWithRedux(<MemoryRouter><Home /></MemoryRouter>, { wrapper: MemoryRouter })
        fireEvent.click(getByText('bulbasaur'))
        expect(mockHistoryPush).toHaveBeenCalledTimes(1)
    })
})