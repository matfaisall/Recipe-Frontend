import React, { useEffect } from "react";
import { Row, Col, Container, Form, Card } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import ButtonSubmit from "../components/ButtonSubmit";

import "./style/AddRecipe.css";

const EditRecipe = () => {
  function preview() {
    frame.src = URL.createObjectURL(event.target.files[0]);
  }

  return (
    <>
      <NavigationBar />
      <main className="mt-5">
        <Container>
          <Row>
            <Col md={8} className="mx-auto">
              <Form>
                <Card className="mb-4 image-card">
                  <img
                    id="frame"
                    alt="image"
                    className="img-fluid w-100 d-block mx-auto upload-img"
                  />
                  <div className="card-img-overlay">
                    <div className="d-flex justify-content-center align-items-center h-100">
                      <input
                        type="file"
                        img=""
                        id="formFile"
                        className="form-control bg-body-secondary w-50"
                        onChange={preview}
                      />
                    </div>
                  </div>
                </Card>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    id="title"
                    className="py-3 bg-body-tertiary"
                    placeholder="Title"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    id="ingredients"
                    className="bg-body-tertiary"
                    placeholder="Ingredients"
                    rows={6}
                  />
                </Form.Group>
                <Row>
                  <Col md={4}>
                    <Form.Select
                      className="py-3 bg-body-tertiary"
                      aria-label=""
                    >
                      <option>Category</option>
                      <option value="1">Main Course</option>
                      <option value="2">Dessert</option>
                      <option value="3">Appetizer</option>
                    </Form.Select>
                  </Col>
                </Row>
                <div className="d-flex justify-content-center">
                  <ButtonSubmit
                    type="submit"
                    class="btn-yellow"
                    text_button="Update"
                  />
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default EditRecipe;
