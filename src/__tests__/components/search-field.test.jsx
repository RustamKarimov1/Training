import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {
    shallow,
    configure
} from 'enzyme';
import { SearchField } from '../../components/search-field/search-field';

configure({ adapter: new Adapter() });

let SEARCH_FIELD;

describe('<SearchField />', () => {
    beforeEach(() => {
        SEARCH_FIELD = shallow(<SearchField />);
    });

    test(' should render one examplar of <Label />', () => {
        expect(SEARCH_FIELD.find('Label')).toHaveLength(1);
    });

    test(' should render input with correct classname', () => {
        expect(SEARCH_FIELD.find('.search-field').exists()).toEqual(true);
    });
});
