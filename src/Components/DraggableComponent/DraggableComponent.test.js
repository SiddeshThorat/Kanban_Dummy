import React from 'react';
import { shallow } from 'enzyme'
import DraggableComponent from'./DraggableComponent.component';

describe("Testing Draggable component",() => {
    const props = {
        task: {id:"1",title:"Dummy Task",category: "icebox"},
        onDragStart: jest.fn(),
        editTask: jest.fn()
    }
    it("Snapshot testing of Draggable component",() => {
        expect(shallow(<DraggableComponent {...props}/>)).toMatchSnapshot();
    })
})


