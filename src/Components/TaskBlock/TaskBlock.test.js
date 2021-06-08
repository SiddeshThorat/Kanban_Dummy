import React from 'react';
import { shallow } from 'enzyme'
import TaskBlockComponent from'./TaskBlock.component';

describe("Testing TaskBlockComponent component",() => {

    const props = {
        category: "icebox",
        tasks: [
            {id:"1",title:"Dummy Task 1",category: "icebox"},
            {id:"2",title:"Dummy Task 2",category: "review"}
        ],
        onDragOver: jest.fn(),
        onDrop: jest.fn(),
        addTask:jest.fn()
    }

    it("Snapshot testing of TaskBlockComponent component",() => {
        expect(shallow(<TaskBlockComponent {...props}/>)).toMatchSnapshot();
    })
    it("Check if Header, containerForDraggable and InputField are rendered",() => {
        const component = shallow(<TaskBlockComponent {...props}/>)
        const header = component.find('Header')
        const containerForDraggable = component.find('.containerForDraggable');
        const inputField = component.find('InputField');

        expect(header.length).toEqual(1);
        expect(containerForDraggable.length).toEqual(1);
        expect(inputField.length).toEqual(1);

    })
})


