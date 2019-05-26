import React from 'react';
import { Header,Icon } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {

    return (
        <div>
        <Header as='h2' icon textAlign='center'>
            <Icon name='users' circular />
           <Header.Content>EtherVote</Header.Content>
        </Header>
        </div>
    );
};