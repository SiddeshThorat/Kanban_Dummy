import React from 'react';
import { shallow } from 'enzyme'
import InputField from'./InputField.component';

describe("Testing InputField component",() => {
    const props = {
        category: "icebox",
        addTask: jest.fn()
    }

    it("Snapshot testing of InputField component",() => {
        expect(shallow(<InputField {...props}/>)).toMatchSnapshot();
    }) 
 
    it(`Checking input field/ submit button are rendered, 
    Triggering addTask buttonon clicking submit button`,() => {
        const component = shallow(<InputField {...props}/>)
        const inputArea = component.find(`[data-test='newTask']`);
        const submitButton = component.find(`[data-test='submitButton']`);

        expect(inputArea.length).toEqual(1);
        expect(submitButton.length).toEqual(1);
        submitButton.simulate('click')
        expect(props.addTask).toHaveBeenCalled();
    }) 

})


