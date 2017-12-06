import React, { Component } from 'react';
import { connect }          from 'react-redux';
import PropTypes            from 'prop-types';
import { compare}           from '../../helpers/compare';
import { linkActions }      from '../../helpers/redux';
import { setSortValue }     from '../../Store/actions';


@connect(
    ({ templateValue, sortValue, allowSort }) => ({ templateValue, sortValue, allowSort }),
    linkActions( setSortValue )
)
export default class CsvTable extends Component {

    static propTypes = {
        templateValue: PropTypes.string.isRequired,
        sortValue: PropTypes.string.isRequired,
        setSortValue: PropTypes.func.isRequired,
        allowSort: PropTypes.bool.isRequired,
    }

    renderTableHead = tableHeadings => {
        const { setSortValue, sortValue, allowSort } = this.props;

        return (
            <thead>
                <tr>
                    { tableHeadings.map((item, i) => {
                        const active = sortValue === item;
                        const newSortValue = active ? '' : item;
                        const isActive = active ? 'active' : '';
                        const allowed = allowSort ? '' : 'forbidden';
                        const className = isActive + allowed;

                        return (
                            <th
                                className={ className }
                                key={ item + i }
                                onClick={ () => allowSort && setSortValue(newSortValue) }
                            >
                                { item }
                            </th> )
                        }
                    )}
                </tr>
            </thead>
        )
    }

    renderTableBody = tableBodyItems => {
        return (
            <tbody>
            {
                tableBodyItems.map((item, i) => {

                    const key = item[Object.keys(item)[0]] + i;

                    return (
                        <tr key={ key }>
                            {
                                Object.keys(item).map((td, index) => {
                                    return (
                                        <td key={index}>{item[td]}</td>
                                    )
                                })
                            }
                        </tr>
                    )
                })
            }
            </tbody>
        )
    }

    render() {
        const { templateValue, sortValue } = this.props;

        const tableItems = templateValue.split('\n');
        const tableHeadings = tableItems[0].split(',');
        const tableBodyItems = tableItems
            .filter((item, index) => index !== 0)
            .map(item => {
                const rows = item.split(',');
                const row = {};

                tableHeadings.forEach((title, i) => {
                    row[title] = rows[i];
                });

                return row
            })
            .sort((a, b) => compare(a, b, sortValue ));

        return (
            <table className='scv-table'>
                { this.renderTableHead(tableHeadings) }
                { this.renderTableBody(tableBodyItems) }
            </table>
        )
    }
}