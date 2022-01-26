import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TableSumaryMobile from '../component/tableSummaryMobile';
configure({ adapter: new Adapter() });

describe('table summary Mobile', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<TableSumaryMobile />)
    })
    
    it('is there input note', () => {
        console.log(wrapper.debug());
        const note = wrapper.find('#note-sumary')
        expect(note.props().value).toBe(undefined)
    })
})