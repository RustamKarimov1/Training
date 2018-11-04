import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Header } from '../../components/header/header';

configure({ adapter: new Adapter() });

describe('<Header />', () => {
    it('should render correctly', () => {
        const HEADER = shallow(<Header />);
        expect(shallowToJson(HEADER)).toMatchSnapshot();
    });
});
