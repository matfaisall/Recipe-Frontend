// This component contains lists such as recipe, bookmarked, and liked.

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./style/ListMenu.css";
import { Link } from "react-router-dom";

const ListMenu = () => {
  return (
    <>
      <Row>
        <Col>
          <div className="d-flex gap-2">
            <ul className="nav line-bottom">
              <li className="nav-item">
                <Link to="#" className="nav-link active text-body-secondary">
                  Recipe
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link text-body-secondary">
                  Bookmarked
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link text-body-secondary">
                  Liked
                </Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ListMenu;
