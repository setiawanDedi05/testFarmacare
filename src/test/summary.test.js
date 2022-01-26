import React from "react";
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import Summary from "../pages/summary";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ERROR, FETCH_POKEMON, LOADING } from "../redux/actionType";

const mockHistoryPush = jest.fn();

//simalation redux
const startState = {
    loadingPokemons: false,
    pokemons: [
        {
            "id": 1,
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/",
            "stock": 0,
            history: [{
                id: 1,
                time: new Date(),
                title: 'Update stock',
                total: 0,
                stock_before: 0,
                note: 'oke'
            }]
        }
    ],
    errorPokemons: false
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
    component, { initialState, store = createStore(reducer, initialState) } = {}
) {
    return {
        ...render(<Provider store={store}>{component}</Provider>)
    }
}

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
    useLocation: () => ({
        state: {
            data: {
                pcs: 1,
                dozen: 2
            },
            pokemon: {
                id: 1,
                name: 'bulbasaur',
                stock: 0,
                url: "https://pokeapi.co/api/v2/pokemon/1/",
                history: [{
                    id: 1,
                    time: new Date(),
                    title: 'stock awal',
                    total: 0,
                    stock_before: 0,
                    note: 'oke'
                }]
            }
        }
    })
}));

describe('Summary', () => {
    test('has an className of title', () => {
        const { getByTestId } = renderWithRedux(<MemoryRouter><Summary /></MemoryRouter>)
        expect(getByTestId("summary-title")).toHaveClass("home-title")
    })
    test('has an `konfirmasi update stock` of summary page', () => {
        const { getByTestId } = renderWithRedux(<MemoryRouter><Summary /></MemoryRouter>)
        expect(getByTestId("summary-title")).toHaveTextContent("Konfirmasi update stock")
    })
    test('has an total pcs of summary page', () => {
        const { getByTestId } = renderWithRedux(<MemoryRouter><Summary /></MemoryRouter>)
        expect(getByTestId("total-pcs")).toHaveTextContent("+25 pcs")
    })
    test('has an stock before of summary page', () => {
        const { getByTestId } = renderWithRedux(<MemoryRouter><Summary /></MemoryRouter>)
        expect(getByTestId("stock-before")).toHaveTextContent("0 pcs")
    })
    test('has an stock after of summary page', () => {
        const { getByTestId } = renderWithRedux(<MemoryRouter><Summary /></MemoryRouter>)
        expect(getByTestId("stock-after")).toHaveTextContent("25 pcs")
    })

    
})