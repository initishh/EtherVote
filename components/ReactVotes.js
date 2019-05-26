import React, { Component } from 'react';
import { Table, Image } from 'semantic-ui-react';

const fontStyle = {
    fontSize : `20px`
}

class RequestVotes extends Component {

    render() {

        const {request} = this.props;

        return (
                     <Table.Row>
                        <Table.Cell><Image size = 'small' src = {request.imageLink}/></Table.Cell>
                        <Table.Cell style= {fontStyle}>{request.name}</Table.Cell>
                        <Table.Cell style= {fontStyle}>{request.partyName}</Table.Cell>
                        <Table.Cell style= {fontStyle}>{request.voteCount}</Table.Cell>
                    </Table.Row>
        );
    }
}

export default RequestVotes;