import React, { PureComponent } from 'react';

export default class Button extends PureComponent {
    render(){
        const { children, clickHandler, disabled } = this.props;

        return (
            <button
                onClick={ clickHandler }
                disabled={ disabled }
            >{ children }</button>
        )
    }
}