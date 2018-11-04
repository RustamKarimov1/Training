import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {
    mount,
    configure
} from 'enzyme';
import Label from '../../components/ui/label/label';

configure({ adapter: new Adapter() });

describe('<Label get property theme is set to light by default />', () => {

    test(' get correct theme property', () => {
        const LABEL = mount(<Label />);

        expect(LABEL.prop('theme')).toEqual('light');
    });
    test('<Label get property sise is set to small by default />', () => {
        const LABEL = mount(<Label />);
        expect(LABEL.prop('size')).toEqual('small');
    });
    test('<Label get property display is set to default by default />', () => {
        const LABEL = mount(<Label />);
        expect(LABEL.prop('display')).toEqual('default');
    });
});
