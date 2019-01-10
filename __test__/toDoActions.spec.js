import * as actions from '../src/js/actions/toDoActions';

describe('ACTION TO DO', () => {
    
    it('ACTION should create an action ADD_TODO ', () => {
        
        const text = "Finish Docs";

        const expectedAction = {
            type : "ADD_TODO",
            text
        };

        expect(actions.addTodo(text)).toEqual(expectedAction);
    });    
});


