import React from 'react';
import { shallow } from 'enzyme'
import Header from'./Header.component';

describe("Testing Header component",() => {
    it("Snapshot testing of Header component",() => {
        expect(shallow(<Header />)).toMatchSnapshot();
    })
})


