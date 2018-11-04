import {
    FETCH_FILMS_BY_THE_SAME_GENRE,
    FETCH_FILMS_BY_THE_SAME_GENRE_SUCCESS,
    FETCH_FILMS_BY_THE_SAME_GENRE_REJECT
} from '../../actions/types/get-films-by-the-same-genre';


import filmsByTheSameGenreReducer from '../../reducers/films-by-the-same-genre';

describe('change results filter', () => {
    it('change to release date filter', () => {
        let state = {
            filmsByTheSameGenre: []
        };
        state = filmsByTheSameGenreReducer(state, {
            type: FETCH_FILMS_BY_THE_SAME_GENRE
        });
        expect(state).toEqual({
            filmsByTheSameGenre: [],
            isFetching: true
        });
    });

    it('change to release date filter', () => {
        let state = {
            filmsByTheSameGenre: []
        };
        state = filmsByTheSameGenreReducer(state, {
            type: FETCH_FILMS_BY_THE_SAME_GENRE_SUCCESS,
            data: { data: [1] }
        });
        expect(state).toEqual({
            filmsByTheSameGenre: [1],
            isFetching: false
        });
    });

    it('change to release date filter', () => {
        let state = {
            filmsByTheSameGenre: []
        };
        state = filmsByTheSameGenreReducer(state, {
            type: FETCH_FILMS_BY_THE_SAME_GENRE_REJECT
        });
        expect(state).toEqual({
            filmsByTheSameGenre: [],
            isFetching: false
        });
    });
});
