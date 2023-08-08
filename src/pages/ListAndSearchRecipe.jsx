import axios from "axios";
import React, { useEffect, useState } from "react";

import NavigationBar from "../components/NavigationBar";
import DetailAuthor from "../components/DetailAuthor";
import ListMenu from "../components/ListMenu";

import { Col, Container, Row, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const ListAndSearchRecipe = () => {
  const [dataRecipe, setDataRecipe] = useState(null);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJmYWlzYWwiLCJlbWFpbCI6ImZhaXNhbEBnbWFpbC5jb20iLCJwaG90byI6bnVsbCwiY3JlYXRlZF9hdCI6IjIwMjMtMDgtMDZUMDQ6Mzk6MTMuNTY2WiIsImlhdCI6MTY5MTQ0NzM1MX0.Boo21QZ-lWfVLISyhGtISxkxFIbIH3fZVPS-g4idiNE";

  const getData = () => {
    axios
      .get("http://localhost:3000/recipe", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setDataRecipe(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  });

  const deleteData = (id) => {
    axios
      .delete(`http://localhost:3000/recipe/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        getData();
      })
      .catch((err) => {
        console.log(err);
        getData();
      });
  };

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

        {dataRecipe?.map((item, index) => {
          // console.log(item);
          return (
            <Row className="my-4" key={index}>
              <Col md={7}>
                <Card className="mb-3 border-0" style={{ maxWidth: 620 }}>
                  <Row className="g-0">
                    <Col md={5}>
                      <img
                        src={item.photo}
                        alt={item.title}
                        className="img-fluid rounded d-flex align-items-center w-100"
                      />
                    </Col>
                    <Col md={7}>
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <p className="mb-0">Ingredients</p>
                        <Card.Text>{item.ingredients}</Card.Text>
                        <Badge bg="warning">
                          <span>10 Likes</span> - <span>1 Comment</span> -{" "}
                          <span>3 Bookmark</span>
                        </Badge>
                        <div className="mt-3">
                          <Link to={`/edit-recipe/${item.id}`}>
                            <button className="btn btn-sm btn-primary me-3">
                              Edit Menu
                            </button>
                          </Link>
                          {/* <button className="btn btn-sm btn-primary me-3">
                            <Link
                              to="/edit-recipe"
                              style={{ color: "#FFF", textDecoration: "none" }}
                            >
                              Edit Menu
                            </Link>
                          </button> */}
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => deleteData(item.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          );
        })}

        {/* {dataRecipe?.map((item, index) => {
          // console.log(item);
          return (
            <ListRecipeCard
              key={index}
              id={item.id}
              title={item.title}
              photo={item.photo}
              ingredients={item.ingredients}
            />
          );
        })} */}
      </Container>
    </>
  );
};

export default ListAndSearchRecipe;
