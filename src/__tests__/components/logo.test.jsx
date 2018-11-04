import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {
    shallow,
    mount,
    render,
    configure
} from 'enzyme';
import Logo from '../../components/logo/logo';

configure({ adapter: new Adapter() });

describe('<Logo />', () => {
    test('should render correctly', () => {
        const LOGO = shallow(<Logo />);
        expect(LOGO.find('.logo').exists()).toEqual(true);
    });
});
