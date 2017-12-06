import React, { PureComponent } from 'react';

export default class TextArea extends PureComponent {
    render(){
        const { changeHandler, value } = this.props;

        return (
            <textarea
                name='csv-template'
                wrap='soft'
                cols='30'
                rows='10'
                value={ value }
                onChange={ changeHandler }/>
        )
    }
}