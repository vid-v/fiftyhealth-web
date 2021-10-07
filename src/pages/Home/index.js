import * as React from "react";
import { Container } from "react-bootstrap";
import EditorsPickComponent from "../../components/Home/EditoresPick";
import FeaturedComponent from "../../components/Home/Featured";
import VideosComponent from "../../components/Home/Videos";
import ExploreByComponent from "./../../components/Home/ExploreBy";
import CategoriesComponent from "./../../components/Home/Categories";

class Home extends React.Component {
  render() {
    return (
      <>
        <ExploreByComponent />
        <VideosComponent />
        <EditorsPickComponent />
        <FeaturedComponent />
        <CategoriesComponent />
      </>
    );
  }
}

export default Home;
