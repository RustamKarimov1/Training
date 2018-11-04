import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { HeaderWithFilmDescription } from '../../components/header-with-film-description/header-with-film-description';

configure({ adapter: new Adapter() });

describe('<HeaderWithFilmDescription />', () => {
    xit('should render correctly', () => {
        const FILMDESCRIPTION = shallow(<HeaderWithFilmDescription />);
        expect(FILMDESCRIPTION.find('.film-description').exists()).toEqual(true);
    });

    xit('should render <Label /> five times', () => {
        const FILMDESCRIPTION = shallow(<HeaderWithFilmDescription />);
        expect(FILMDESCRIPTION.find('Label')).toHaveLength(5);
    });

    xit('should render <Logo />', () => {
        const FILMDESCRIPTION = shallow(<HeaderWithFilmDescription />);
        expect(FILMDESCRIPTION.find('Logo').exists()).toEqual(true);
    });
    xit('should render <Button />', () => {
        const FILMDESCRIPTION = shallow(<HeaderWithFilmDescription />);
        expect(FILMDESCRIPTION.find('Button').exists()).toEqual(true);
    });
    xit('should render BLOCK WITH INFO', () => {
        const FILMDESCRIPTION = shallow(<HeaderWithFilmDescription />);
        expect(FILMDESCRIPTION.find('.film-description__info').exists()).toEqual(true);
    });
    xit('should render container for image', () => {
        const FILMDESCRIPTION = shallow(<HeaderWithFilmDescription />);
        expect(FILMDESCRIPTION.find('.film-description__poster-container').exists()).toEqual(true);
    });
    xit('should render image', () => {
        const FILMDESCRIPTION = shallow(<HeaderWithFilmDescription />);
        expect(FILMDESCRIPTION.find('.film-description__poster').exists()).toEqual(true);
    });
    xit('should render description', () => {
        const FILMDESCRIPTION = shallow(<HeaderWithFilmDescription />);
        expect(FILMDESCRIPTION.find('.film-description__description').exists()).toEqual(true);
    });
});
