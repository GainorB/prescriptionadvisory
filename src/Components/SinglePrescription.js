import React from 'react';
import { Table } from 'semantic-ui-react';

const SinglePrescription = props => {
  return (
    <Table.Row>
      <Table.Cell>{props.data.id}</Table.Cell>
      <Table.Cell>{props.data.name}</Table.Cell>
      <Table.Cell>{props.data.type}</Table.Cell>
      <Table.Cell>{props.data.strength}</Table.Cell>
      <Table.Cell>{props.data.startDate}</Table.Cell>
      <Table.Cell>{props.data.endDate}</Table.Cell>
      <Table.Cell>{props.data.provider.id}</Table.Cell>
      <Table.Cell>{props.data.provider.firstName}</Table.Cell>
      <Table.Cell>{props.data.provider.lastName}</Table.Cell>
      <Table.Cell>{props.data.provider.address}</Table.Cell>
      <Table.Cell>{props.data.provider.phone}</Table.Cell>
      <Table.Cell>{props.data.pharmacy.id}</Table.Cell>
      <Table.Cell>{props.data.pharmacy.storeName}</Table.Cell>
      <Table.Cell>{props.data.pharmacy.address}</Table.Cell>
      <Table.Cell>{props.data.pharmacy.phone}</Table.Cell>
    </Table.Row>
  );
};

export default SinglePrescription;
