import * as React from 'react';
import { Button, Container } from 'react-bootstrap';
import ExploreBySec1Component from './ExploreBySec1';
const ExploreByComponent = ({ }) => {
    return (
        <Container>
            Explore By
            <hr/>
            <ExploreBySec1Component/>
        </Container>
    );
}

export default ExploreByComponent;
