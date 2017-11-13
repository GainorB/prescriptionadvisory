import React, { Component } from 'react';
import { Table, Input } from 'semantic-ui-react';
import _ from 'lodash';

// DATA
import Prescriptions from './Data/prescriptions.json';

// COMPONENTS
import SinglePrescription from './Components/SinglePrescription';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      data: Prescriptions,
      column: null,
      direction: null
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending'
      });

      return;
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending'
    });
  };

  handleSearch = e => {
    const term = e.target.value;
    console.log({ term });
    let { data } = this.state;
    data = data.filter(e => e.name === term);
    this.setState({
      data
    });
  };

  renderPrescriptions = () => {
    const { data } = this.state;
    const showPrescriptions = data.map((element, index) => {
      return <SinglePrescription data={element} key={index} />;
    });

    return showPrescriptions;
  };

  renderTable = () => {
    const { column, direction } = this.state;
    return (
      <Table celled selectable striped sortable size="small" columns="fifteen" basic="very">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === 'id' ? direction : null}
              onClick={this.handleSort('id')}
              singleLine>
              scriptID
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'name' ? direction : null}
              onClick={this.handleSort('name')}
              singleLine>
              Medication
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'type' ? direction : null}
              onClick={this.handleSort('type')}
              singleLine>
              Classification
            </Table.HeaderCell>
            <Table.HeaderCell singleLine>Strength</Table.HeaderCell>
            <Table.HeaderCell singleLine>Start Date</Table.HeaderCell>
            <Table.HeaderCell singleLine>End Date</Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'provider.id' ? direction : null}
              onClick={this.handleSort('provider.id')}
              singleLine>
              providerID
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'provider.firstName' ? direction : null}
              onClick={this.handleSort('provider.firstName')}
              singleLine>
              Provider First Name
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'provider.lastName' ? direction : null}
              onClick={this.handleSort('provider.lastName')}
              singleLine>
              Provider Last Name
            </Table.HeaderCell>
            <Table.HeaderCell singleLine>Provider Address</Table.HeaderCell>
            <Table.HeaderCell singleLine>Provider Phone</Table.HeaderCell>
            <Table.HeaderCell singleLine>Pharmacy ID</Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'pharmacy.storeName' ? direction : null}
              onClick={this.handleSort('pharmacy.storeName')}
              singleLine>
              Pharmacy Name
            </Table.HeaderCell>
            <Table.HeaderCell singleLine>Pharmacy Address</Table.HeaderCell>
            <Table.HeaderCell singleLine>Pharmacy Phone</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>{this.renderPrescriptions()}</Table.Body>
      </Table>
    );
  };

  renderFeatures = () => {
    return (
      <div>
        <h1>Features</h1>
        <ul>
          <li>
            Clicking these column headings sorts the column in ascending/descending order: scriptID,
            Medication, Classification, providerID, Provider First Name, Provider Last Name, &
            Pharmacy Name{' '}
          </li>
        </ul>
        <br />
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.renderFeatures()}
        <br />
        <Input icon="search" placeholder="Search.." onBlur={this.handleSearch} />
        <br />
        {this.renderTable()}
      </div>
    );
  }
}

export default App;
