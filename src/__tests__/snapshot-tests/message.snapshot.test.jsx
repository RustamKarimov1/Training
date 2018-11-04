import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ErrorBoundary from '../../components/error-boundary/error-boundary';

configure({ adapter: new Adapter() });

describe('<ErrorBoundary />', () => {
    it('should render correctly if hasError state is false', () => {
        const ERRORBOUNDARY = shallow(<ErrorBoundary />);
        ERRORBOUNDARY.setState({ hasError: true });
        expect(shallowToJson(ERRORBOUNDARY)).toMatchSnapshot();
    });
});
