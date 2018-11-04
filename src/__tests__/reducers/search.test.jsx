import {
    FETCH_SEARCH,
    FETCH_SEARCH_REJECT,
    FETCH_SEARCH_SUCCESS,
    CHANGE_SEARCH_FILTER,
    CHOOSE_FILM
} from '../../actions/types/search';
import search from '../../reducers/search';

describe('search', () => {
    let state;

    beforeEach(() => {
        state = {
            list: [],
            isFetching: false,
            chosenFilm: {},
            filter: 'title',
            limit: '100'
        };
    });

    it('pending', () => {
        state = search(state, {
            type: FETCH_SEARCH
        });

        expect(state).toEqual({
            list: [],
            isFetching: true,
            chosenFilm: {},
            filter: 'title',
            limit: '100'
        });
    });

    it('success', () => {
        state = search(state, {
            type: FETCH_SEARCH_SUCCESS,
            data: { data: [1, 2, 3] }
        });

        expect(state).toEqual({
            list: [1, 2, 3],
            isFetching: false,
            chosenFilm: {},
            filter: 'title',
            limit: '100'
        });
    });

    it('reject', () => {
        state = search(state, {
            type: FETCH_SEARCH_REJECT,
            data: { data: [1, 2, 3] }
        });

        expect(state).toEqual({
            list: [],
            isFetching: false,
            chosenFilm: {},
            filter: 'title',
            limit: '100'
        });
    });

    it('to change filter to genre sorting', () => {
        state = search(state, {
            type: CHANGE_SEARCH_FILTER,
            data: 'genre'
        });

        expect(state).toEqual({
            list: [],
            isFetching: false,
            chosenFilm: {},
            filter: 'genre',
            limit: '100'
        });
    });

    it('some film was chosen', () => {
        state = search(state, {
            type: CHOOSE_FILM,
            data: { prop: 1 }
        });

        expect(state).toEqual({
            list: [],
            isFetching: false,
            chosenFilm: { prop: 1 },
            filter: 'title',
            limit: '100'
        });
    });
});
