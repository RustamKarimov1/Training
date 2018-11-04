import {
    CHANGE_RESULTS_FILTER
} from '../../actions/types/resultsFilter';

import changeResultsFilter from '../../reducers/resultsFilter';

describe('change results filter', () => {
    it('change to release date filter', () => {
        let state = {
            resultsFilter: 'rating'
        };
        state = changeResultsFilter(state, {
            type: CHANGE_RESULTS_FILTER,
            data: 'release date'
        });
        expect(state).toEqual({
            resultsFilter: 'release date'
        });
    });
});
