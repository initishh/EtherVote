import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header';

export default (props) => {
    return (
        <Container>
            <Head>
                <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossorigin="anonymous"
                />
                <script src="https://unpkg.com/react/umd/react.production.js" crossorigin />

                <script
                    src="https://unpkg.com/react-dom/umd/react-dom.production.js"
                    crossorigin
                />

                <script
                    src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                    crossorigin
                />
            </Head>
            <Header />
            {props.children}
        </Container>
    );
}