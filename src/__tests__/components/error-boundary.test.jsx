import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {
    shallow,
    configure
} from 'enzyme';
import ErrorBoundary from '../../components/error-boundary/error-boundary';

configure({ adapter: new Adapter() });

describe('<ErrorBoundary />', () => {
    test(' hasError state should be false', () => {
        const ERROR = shallow(<ErrorBoundary />);
        expect(ERROR.state().hasError).toEqual(false);
    });

    test('should render message if haserror state:true', () => {
        const ERROR = shallow(<ErrorBoundary />);
        ERROR.setState({ hasError: true });
        expect(ERROR.contains(<h1>Something went wrong.</h1>)).toBeTruthy();
    });
});
