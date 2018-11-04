import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {
    shallow,
    configure
} from 'enzyme';
import { SearchBar } from '../../components/search-bar/search-bar';

configure({ adapter: new Adapter() });

let SEARCH_BAR;

describe('<SearchBar />', () => {
    beforeEach(() => {
        SEARCH_BAR = shallow(<SearchBar />);
    });

    test(' should render correctly', () => {
        expect(SEARCH_BAR.find('.search-bar').exists()).toEqual(true);
    });

    test(' should render one examplars of <Label />', () => {
        expect(SEARCH_BAR.find('Label')).toHaveLength(1);
    });
    test(' should render one  <Button />', () => {
        expect(SEARCH_BAR.find('Button')).toHaveLength(1);
    });
});
