import { changeResultsFilter, changeValueOfSearchField, changeFilterOfSearch } from '../../actions/filters';
import { CHANGE_RESULTS_FILTER } from '../../actions/types/resultsFilter';
import { CHANGE_SEARCH_FILTER } from '../../actions/types/search';
import { CHANGE_SEARCH_FIELD_TEXT } from '../../actions/types/searchField';

describe('filters results filter', () => {
    it('right dispatch', () => {
        let text = 'text';
        const result = changeResultsFilter(text);
        expect(result).toEqual({ type: CHANGE_RESULTS_FILTER, data: text });
    });
    it('right dispatch searchfield value', () => {
        let text = 'text';
        const result = changeValueOfSearchField(text);
        expect(result).toEqual({ type: CHANGE_SEARCH_FIELD_TEXT, data: text });
    });
    it('right dispatch search filter', () => {
        let text = 'text';
        const result = changeFilterOfSearch(text);
        expect(result).toEqual({ type: CHANGE_SEARCH_FILTER, data: text });
    });
});
