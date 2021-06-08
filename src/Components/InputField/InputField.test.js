import React from 'react';
import { shallow } from 'enzyme'
import InputField from'./InputField.component';

describe("Testing InputField component",() => {

    it("Snapshot testing of InputField component",() => {
        const props = {
            category: "icebox",
            addTask: jest.fn()
        }
        expect(shallow(<InputField {...props}/>)).toMatchSnapshot();
    })


})


