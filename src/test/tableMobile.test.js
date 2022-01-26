import React from "react";
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import TableMobile from "../component/tableMobile";

const history = [{
    id: 1,
    id_pokemon: 1,
    time: new Date(),
    title: 'Update stock',
    total: 20,
    stock_before: 0,
    note: 'oke'
}]

describe('Table Mobile', () => {
    test('has an date of each history', () => {
        const date = new Date(history[0].time).toDateString()
        const { getByTestId } = render(<TableMobile history={history} />)
        expect(getByTestId("date-history")).toHaveTextContent(date)
    })
    test('has a time of history', () => {
        const time = `${new Date(history[0].time).getHours()} : ${new Date(history[0].time).getMinutes()}`
        const { getByTestId } = render(<TableMobile history={history} />)
        expect(getByTestId('hours-history')).toHaveTextContent(time)
    })
})