import * as React from 'react';
import { Container } from 'react-bootstrap'
import VideosComponent from '../../components/Home/Videos';
import ExploreByComponent from "./../../components/Home/ExploreBy";

class Home extends React.Component {
  render() {
    return (
      <Container>
        <ExploreByComponent/>
        <VideosComponent/>
      </Container>
    );
  }
}

export default Home;
