import React from 'react';
import { shallow } from 'enzyme'
import DraggableComponent from'./DraggableComponent.component';

describe("Testing Draggable component",() => {
    let mockProps = {
        task: {id:"1",title:"Dummy Task",category: "icebox"},
        onDragStart: jest.fn(),
        editTask: jest.fn()
    }
    const mockState = {
        mockEditStatus: false,
        changedTaskTitle: mockProps.task.title
    }

    it("Snapshot testing of Draggable component",() => {
        expect(shallow(<DraggableComponent {...mockProps}/>)).toMatchSnapshot();
    })

    it("checking edit Button",() => {
        const component = shallow(
        <DraggableComponent {...mockProps} state={mockState} />
        )
        const editButton = component.find(`[data-test='editButton']`)
        expect(editButton.length).toEqual(1);
    })
})


