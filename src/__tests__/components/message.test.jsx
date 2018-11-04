import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {
    shallow,
    configure
} from 'enzyme';
import Message from '../../components/message/message';

configure({ adapter: new Adapter() });

describe('<Message />', () => {
    test('Message component must render block with className: message', () => {
        const MESSAGE = shallow(<Message />);
        expect(MESSAGE.contains(<div className='message' />)).toBeTruthy();
    });
});
