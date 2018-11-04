import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {
    mount,
    shallow,
    configure
} from 'enzyme';
import Button from '../../components/ui/button/button';

configure({ adapter: new Adapter() });

describe('Button', () => {
    test('should get correct theme property', () => {
        const BUTTON = mount(<Button />);
        expect(BUTTON.prop('theme')).toEqual('default');
    });
    test(' get correct theme property', () => {
        const BUTTON = mount(<Button />);
        expect(BUTTON.prop('size')).toEqual('small');
    });
    test(' get correct theme property', () => {
        const BUTTON = mount(<Button />);
        expect(BUTTON.prop('side')).toEqual('left');
    });
    test(' get correct theme property', () => {
        const BUTTON = mount(<Button />);
        expect(BUTTON.prop('background')).toEqual('visible');
    });

    it('Test click event', () => {
        const mockCallBack = jest.fn();

        const BUTTON = shallow((<Button onClick={ mockCallBack }>Ok!</Button>));
        BUTTON.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });
});
