import React, { Component } from 'react';
import './search-field.scss';
import bemCn from 'bem-cn-fast';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';
import Type from 'prop-types';
import Label from '../ui/label/label';

const cn = bemCn('search-field');

const mapStateToProps = state => ({
    value: state.searchField.value
});

class SearchField extends Component {
    static propTypes = {
        onChange: Type.func,
        value: Type.string
    }

    static defaultProps = {
        value: ''
    }

    render() {
        return (
            <React.Fragment>
                <Label>FIND YOUR MOVIE</Label>
                <input
                    className={ cn() }
                    placeholder='search'
                    onChange={ this.handleChange }
                    value={ this.props.value }
                />
            </React.Fragment>
        );
    }

    @autobind
    handleChange(event) {
        let { onChange } = this.props;
        if (onChange) {
            onChange(event);
        }
    }
}

export { SearchField };
export default connect(mapStateToProps)(SearchField);
