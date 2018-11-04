import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getFilmsByTheSameGenre } from '../../actions/getFilmsByTheSameGenre';
import {
    FETCH_FILMS_BY_THE_SAME_GENRE,
    FETCH_FILMS_BY_THE_SAME_GENRE_SUCCESS,
    FETCH_FILMS_BY_THE_SAME_GENRE_REJECT
} from '../../actions/types/get-films-by-the-same-genre';

describe('ExampleComponent', () => {
    it('fetches data from server when server returns a successful response', () => {
        // 1
        const mockSuccessResponse = {};
        const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
        const mockFetchPromise = Promise.resolve({
            // 3
            json: () => mockJsonPromise
        });
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise); // 4

        expect(global.fetch).toHaveBeenCalledTimes(1);
    });
});

// const mockStore = configureMockStore([thunk]);

// describe('fetch', () => {
//     it('request', async () => {
//         window.fetch = jest.fn(() => new Promise(resolve => resolve()));
//         const store = mockStore();
//         await store.dispatch(getFilmsByTheSameGenre("action", "10"));
//         const actions = store.getActions();
//         console.log(actions);
//         expect(actions[0]).toEqual({ type: FETCH_FILMS_BY_THE_SAME_GENRE });
//     });
// });
