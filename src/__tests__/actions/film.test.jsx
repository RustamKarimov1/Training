import { getFilmInfo } from '../../actions/film';
import { CHOOSE_FILM } from '../../actions/types/search';

describe('choose film', () => {
    it('right dispatch', () => {
        let arrayMock = [{ id: 1 }, { id: 2 }];
        let id = 1;
        const chooseFilm = getFilmInfo(arrayMock, id);
        expect(chooseFilm).toEqual({ type: CHOOSE_FILM, data: { id: 1 } });
    });
});
