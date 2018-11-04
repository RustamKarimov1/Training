import { CHANGE_SEARCH_FIELD_TEXT } from '../../actions/types/searchField';
import searchField from '../../reducers/searchField';

describe('change results filter', () => {
    it('change search field s text', () => {
        let state = {
            value: ''
        };
        state = searchField(state, {
            type: CHANGE_SEARCH_FIELD_TEXT,
            data: 'bob'
        });
        expect(state).toEqual({
            value: 'bob'
        });
    });
});
