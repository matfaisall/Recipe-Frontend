import React from "react";
import NavigationBar from "../components/NavigationBar";
import DetailAuthor from "../components/DetailAuthor";
import ListMenu from "../components/ListMenu";
import ListRecipeCard from "../components/ListRecipeCard";
import { Col, Container, Row } from "react-bootstrap";

const ListAndSearchRecipe = () => {
  return (
    <>
      <NavigationBar />
      <Container>
        <div className="mt-4">
          <DetailAuthor
            authorname="Matt Faisall"
            date="August 05, 2023"
            recipetotal="10"
          />
        </div>
        <Row>
          <Col>
            <ListMenu />
          </Col>
        </Row>
        <ListRecipeCard />
      </Container>
    </>
  );
};

export default ListAndSearchRecipe;
