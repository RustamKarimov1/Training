import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { shallow, mount, render, configure } from 'enzyme';
import { STATE } from '../../../__mocks__/state';
import FilmCard from '../../components/film-card/film-card';

configure({ adapter: new Adapter() });

describe('<FilmCard />', () => {
    const initialState = STATE;
    const mockStore = configureStore();
    let store;
    let container;

    beforeEach(() => {
        store = mockStore(initialState);
        container = mount(<Provider store={ store }><FilmCard imagePath='' title='' genre='' releaseDate='12345' /></Provider>);
    });
    it('should render correctly', () => {
        expect(container.find('.film-card').exists()).toEqual(true);
    });
});
