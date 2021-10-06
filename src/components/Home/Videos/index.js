import * as React from 'react';
import {  Container } from 'react-bootstrap';
import VideoComponent from './video';
const VideosComponent = ({ }) => {
    return (
        <Container>
            Videos
            <hr/>
            <VideoComponent/>
            <VideoComponent/>
            <VideoComponent/>
            <VideoComponent/>
            <VideoComponent/>
        </Container>
    );
}

export default VideosComponent;
