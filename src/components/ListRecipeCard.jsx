import React from "react";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import testImg from "/public/images/popular-recipe1.jpg";

import "./style/ListRecipeCard.css";
import { Link } from "react-router-dom";

const ListRecipeCard = () => {
  return (
    <Row className="my-4">
      <Col md={7}>
        <Card className="mb-3 border-0" style={{ maxWidth: 620 }}>
          <Row className="g-0">
            <Col md={5}>
              <img
                src={testImg}
                alt=""
                className="img-fluid rounded d-flex align-items-center w-100"
              />
            </Col>
            <Col md={7}>
              <Card.Body>
                <Card.Title>American Shrimp Fried Rice</Card.Title>
                <p className="mb-0">Ingredients</p>
                <Card.Text>
                  Chicken , Rice, Soy Souce Garlic, Black Chhili paper
                </Card.Text>
                <Badge bg="warning">
                  <span>10 Likes</span> - <span>1 Comment</span> -{" "}
                  <span>3 Bookmark</span>
                </Badge>
                <div className="mt-3">
                  <button className="btn btn-sm btn-primary me-3">
                    <Link
                      to="/edit-recipe"
                      style={{ color: "#FFF", textDecoration: "none" }}
                    >
                      Edit Menu
                    </Link>
                  </button>
                  <button className="btn btn-sm btn-danger">
                    <Link
                      to=""
                      style={{ color: "#FFF", textDecoration: "none" }}
                    >
                      Delete
                    </Link>
                  </button>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default ListRecipeCard;
