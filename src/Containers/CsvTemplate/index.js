import React, { Component } from 'react';
import { connect } from 'redux';


import "./style.css"


@connect
export default class CsvTemplateContainer extends Component {

    checkVal = (e) => {
        const val = e.target.value;
        // console.log( val.replace(/\n\r?/g, '<br />') );
        console.log(val.split("\n"))
    }

    render(){
        return (
            <div className="csv-template-container">
                <textarea
                    name="csv-template"
                    wrap="soft"
                    cols="30"
                    rows="10"
                onChange={ this.checkVal }/>
                <button >Create table</button>
            </div>
        )
    }
}