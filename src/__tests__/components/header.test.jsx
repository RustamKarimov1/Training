import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import {
    shallow,
    mount,
    configure
} from 'enzyme';
import { Header } from '../../components/header/header';
import { STATE } from '../../../__mocks__/state';


configure({ adapter: new Adapter() });

describe('<Header />', () => {
    let header;
    let store;
    let initialState = STATE;
    const mockStore = configureStore();

    beforeEach(() => {
        store = mockStore(initialState);
        header = mount(<Provider store={ store }><Header /></Provider>);
    });

    it('should render correctly', () => {
        expect(header.find('.header').exists()).toEqual(true);
    });
    it('should render <Logo />', () => {
        expect(header.find('Logo').exists()).toEqual(true);
    });
    it('should render <SearchField />', () => {
        expect(header.find('SearchField').exists()).toEqual(true);
    });
    it('should render <SearchBar />', () => {
        expect(header.find('SearchBar').exists()).toEqual(true);
    });
});
