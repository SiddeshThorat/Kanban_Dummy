import React from 'react';
import { shallow } from 'enzyme'
import App from'./App';

describe("Testing App component",() => {
    it("Snapshot testing of App component",() => {
        expect(shallow(<App />)).toMatchSnapshot();
    })
})


