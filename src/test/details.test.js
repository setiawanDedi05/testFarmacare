import React from "react";
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Details from "../pages/details";
import { MemoryRouter } from 'react-router-dom'

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
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

describe('Details', () => {
    test('has an className of stack', () => {
        const { getByTestId } = render(<MemoryRouter><Details /></MemoryRouter>)
        expect(getByTestId("stack")).toHaveClass("stack")
    })
    test('has an svg of stack', () => {
        const { container } = render(<MemoryRouter><Details /></MemoryRouter>)
        const svg = container.querySelector('svg')
        expect(svg).toBeInTheDocument()
    })
    test('has an span tag ', () => {
        const { getByTestId } = render(<MemoryRouter><Details/></MemoryRouter>)
        expect(getByTestId("stack-title")).toHaveTextContent("Stock Pokémon")
    })
    test('has an className of svg', () => {
        const { container } = render(<MemoryRouter><Details /></MemoryRouter>)
        const svg = container.querySelector('svg')
        expect(svg).toHaveClass('icon-stack')
    })
    test('has in span title page with name of pokémon', () => {
        const { getByTestId } = render(<MemoryRouter><Details /></MemoryRouter>)
        expect(getByTestId('pokemon-name')).toHaveTextContent('bulbasaur')
    })
    test('has in stock with name of pokémon', () => {
        const { getByTestId } = render(<MemoryRouter><Details /></MemoryRouter>)
        expect(getByTestId('pokemon-stock')).toHaveTextContent('0')
    })
})