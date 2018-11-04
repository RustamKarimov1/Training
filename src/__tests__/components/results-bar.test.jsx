import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {
    shallow,
    configure
} from 'enzyme';
import { ResultsBar } from '../../components/results-bar/results-bar';

configure({ adapter: new Adapter() });

let films;
let RESULTS_BAR;

describe('<ResultsBar />', () => {
    beforeEach(() => {
        films = [];
        RESULTS_BAR = shallow(<ResultsBar films={ films } />);
    });

    test(' should render correctly', () => {
        expect(RESULTS_BAR.find('.results-bar').exists()).toEqual(true);
    });

    test(' should render one exampler of <RadioGroup />', () => {
        expect(RESULTS_BAR.find('RadioGroup')).toHaveLength(1);
    });
});
