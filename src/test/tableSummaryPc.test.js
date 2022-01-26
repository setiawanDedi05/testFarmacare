import React from "react";
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ERROR, FETCH_POKEMON, LOADING } from "../redux/actionType";
import { MemoryRouter } from 'react-router-dom'
import TableSumaryPC from "../component/tableSummaryPc";
import {mount} from 'enzyme';

const startState = {
    loadingPokemons: false,
    pokemons: [
        {
            "id": 1,
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/",
            "stock": 0
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

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
        goBack : mockHistoryPush
    }),
    useLocation: () => ({
        state: {
            pokemon: {
                id: 1,
                name: 'bulbasaur',
                stock: 0,
                url: "https://pokeapi.co/api/v2/pokemon/1/",
                history: [{
                    id: 1,
                    time: new Date(),
                    title: 'Update stock',
                    total: 20,
                    stock_before: 0,
                    note: 'oke'
                }]
            }
        }
    })
}));

describe('Table Summbary Pc', () => {
    test('Click button edit', () => {
        const data = {
            pcs: 2,
            dozen: 1
        }
        const { getByTestId, container } = renderWithRedux(<MemoryRouter><TableSumaryPC data={data} /></MemoryRouter>, { wrapper: MemoryRouter })
        fireEvent.click(getByTestId('edit-button'))
        const component = container.querySelector('#update-stock-modal')
        expect(component).toBeInTheDocument()
    })
    test('Click button cancel', () => {
        const data = {
            pcs: 2,
            dozen: 1
        }
        const { getByText } = renderWithRedux(<MemoryRouter><TableSumaryPC data={data} /></MemoryRouter>, { wrapper: MemoryRouter })
        fireEvent.click(getByText('Batal'))
        expect(mockHistoryPush).toHaveBeenCalledTimes(1)
    })
})