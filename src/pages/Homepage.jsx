import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import SearchBar from "../components/SearchBar";

import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Footer from "../components/Footer";

// import data recipe popular
import popularRecipeData from "../data/PopularRecipeData";

import "boxicons";

import "./style/Homepage.css";

// import image
import MenuHero from "/images/menu-hero.jpg";

// import component card
import CardRecipe from "../components/CardRecipe";
import SearchResult from "../components/SearchResult";

const Homepage = () => {
  const [result, setResult] = useState([]);
  // console.log(result);
  return (
    <>
      <span className="bg-yellow"></span>
      {/* Section Navigation Bar */}
      <NavigationBar />

      {/* Section Header */}
      <section>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="mb-3">
                <h1 className="text-center text-md-start fw-bold">
                  Discover Recipe <br />& Delicious Food
                </h1>
              </div>
              <Row>
                <Col md={10}>
                  {/* search input */}
                  <SearchBar setResult={setResult} />
                  <SearchResult result={result} />
                  {/* end search input */}
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <img
                src={MenuHero}
                className="d-block mx-auto rounded mt-5 mt-md-0"
                alt="Hero Image"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* section popular*/}
      <section>
        <Container>
          <span className="border-start mt-5 mb-3 mb-md-5 d-flex align-items-center border-yellow">
            <h3 className="m-0 my-3 ps-3 d-flex">Popular For You !</h3>
          </span>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="photo-line"></div>
              <img
                src={MenuHero}
                className="d-block mx-auto rounded mt-5 mt-md-0"
                alt="Popular menu"
              />
            </Col>
            <Col md={6}>
              <div className="mt-5 ms-0 ms-md-5 text-center text-md-start">
                <h1 className=" fw-bold mb-4">
                  Healthy Bone Broth Ramen (Quick & Easy)
                </h1>
                <p className="mb-4">
                  Quick + Easy Chicken Bone Broth Ramen-Healthy chicken ramen in
                  a hurry ? That's right!
                </p>
                <button className="btn btn-yellow py-3 px-4">Learn More</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* new recipe */}
      <div className="decorate"></div>
      <section>
        <Container>
          <span className="border-start mt-5 mb-3 mb-md-5 d-flex align-items-center border-yellow">
            <h3 className="m-0 my-3 ps-3 d-flex">New Recipe</h3>
          </span>
          <Row className="align-items-center">
            <Col md={6}>
              <img
                src={MenuHero}
                className="d-block mx-auto rounded mt-5 mt-md-0"
                alt="Popular menu"
              />
            </Col>
            <Col md={6}>
              <div className="mt-5 ms-0 ms-md-5 text-center text-md-start">
                <h1 className=" fw-bold mb-4">
                  Healthy Bone Broth Ramen (Quick & Easy)
                </h1>
                <p className="mb-4">
                  Quick + Easy Chicken Bone Broth Ramen-Healthy chicken ramen in
                  a hurry ? That's right!
                </p>
                <button className="btn btn-yellow py-3 px-4">Learn More</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* section popular recipe */}
      <section className="mb-5">
        <Container>
          <span className="border-start mt-5 mb-3 mb-md-5 d-flex align-items-center border-yellow">
            <h3 className="m-0 my-3 ps-3 d-flex">Popular Recipe</h3>
          </span>

          <Row className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {/* image overlay popular */}

            {popularRecipeData.map((itemRecipe, index) => (
              <CardRecipe
                key={index}
                image={itemRecipe.image}
                title={itemRecipe.title}
                sub_title={itemRecipe.sub_title}
              />
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
};

export default Homepage;
