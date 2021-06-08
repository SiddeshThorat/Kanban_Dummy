import React from 'react';
import { shallow } from 'enzyme'
import Spinner from'./Spinner.component';

describe("Testing Spinner component",() => {
    it("Snapshot testing of Spinner component",() => {
        expect(shallow(<Spinner />)).toMatchSnapshot();
    })
})


