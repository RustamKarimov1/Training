import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { shallow, mount, render, configure } from 'enzyme';
import MainContent from '../../components/main-content/main-content';
import { STATE } from '../../../__mocks__/state';

configure({ adapter: new Adapter() });

describe('<MainContent />', () => {
    const initialState = STATE;
    const mockStore = configureStore();
    let store, container

    beforeEach(() => {
        store = mockStore(initialState);
        container = mount(<Provider store={ store }><MainContent /></Provider>);
    });


    it('should render correctly asa', () => {
        expect(container.find('MainContent').length).toEqual(1);
    });
    it('should render correctly', () => {
        expect(container.find('.main-content').exists()).toEqual(true);
    });
    it('should render <ResultsBody />', () => {
        expect(container.find('ResultsBar').exists()).toEqual(true);
    });
    it('should render <ResultsBody />', () => {
        expect(container.find('ResultsBody').exists()).toEqual(true);
    });
});
