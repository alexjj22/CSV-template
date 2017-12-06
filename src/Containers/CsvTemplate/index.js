import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import PropTypes              from 'prop-types';
import { linkActions }        from '../../helpers/redux';
import {
    setCsvTemplate,
    createTableFromTemplate } from '../../Store/actions';
import Button                 from '../../Components/Button';
import TextArea               from '../../Components/TextArea';

@connect(
    ({ templateValue, allowTableCreating, tableCreatingPermission , tableCreated}) =>({ templateValue, allowTableCreating, tableCreatingPermission, tableCreated }),
    linkActions(setCsvTemplate, createTableFromTemplate)
)
export default class CsvTemplateContainer extends Component {

    static propTypes = {
        templateValue: PropTypes.string.isRequired,
        setCsvTemplate: PropTypes.func.isRequired,
        createTableFromTemplate: PropTypes.func.isRequired,
        tableCreatingPermission: PropTypes.bool.isRequired,
        tableCreated: PropTypes.bool.isRequired,
    }

    render(){
        const {
            templateValue,
            setCsvTemplate,
            createTableFromTemplate,
            tableCreatingPermission,
            tableCreated } = this.props;

        return (
            <div className="csv-template-container">
                <TextArea
                    value={ templateValue }
                    changeHandler={ e => setCsvTemplate(e.target.value) }
                />
                <Button
                    clickHandler={ ()=> createTableFromTemplate(true) }
                    disabled={ !tableCreatingPermission || tableCreated }
                >Create table</Button>
            </div>
        )
    }
}