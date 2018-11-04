import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {
    shallow,
    mount,
    render,
    configure
} from 'enzyme';
import Footer from '../../components/footer/footer';

configure({ adapter: new Adapter() });

describe('<Footer />', () => {
    test('should render correctly', () => {
        const FOOTER = shallow(<Footer />);
        expect(FOOTER.find('.footer').exists()).toEqual(true);
    });
    test('should render <Label />', () => {
        const FOOTER = shallow(<Footer />);
        expect(FOOTER.find('Logo').exists()).toEqual(true);
    });
});
