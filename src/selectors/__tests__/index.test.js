import {getMatchingTodos} from '../index';
import {List, Map} from 'immutable'

describe('Testing selectors', ()=>{
    test('Should return todos including search term in the description', ()=>{
        const todos = List([{description:'abc 123'},{description:'pqr 123'},{description:'PQRddd'}]);
        const searchTerm = 'pqr';
        const result = getMatchingTodos(Map({todos, searchTerm}));
        const expected =  List([{description:'pqr 123'},{description:'PQRddd'}]);
        expect(result).toEqual(expected);
    });
})