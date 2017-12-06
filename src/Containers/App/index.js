import React, { Component } from 'react';
import { connect }          from 'react-redux';
import CsvTemplateContainer from '../CsvTemplate/index';
import CsvTable             from '../CsvTable/index';
import Guide                from '../../Components/Guide'
import PropTypes            from 'prop-types';
import './styles.css';

@connect( ({ tableCreated }) => ({ tableCreated }) )
class App extends Component {

    static propTypes = {
        tableCreated: PropTypes.bool.isRequired
    }

    render() {
        const { tableCreated } = this.props;
        return (
            <div className="app">
                <Guide />
                <CsvTemplateContainer />
                { tableCreated && <CsvTable /> }
            </div>
        );
    }
}

export default App;
