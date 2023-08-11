import axios from "axios";
import React, { useState } from "react";
import { Row, Col, Container, Form, Card } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import ButtonSubmit from "../components/ButtonSubmit";
import Swal from "sweetalert2";

import "./style/AddRecipe.css";
import { useNavigate } from "react-router-dom";

const AddRecipe = () => {
  const token = import.meta.env.VITE_JWT_TOKEN;

  const navigate = useNavigate();
  const [image, setPhoto] = useState(null);
  const [inputData, setInputData] = useState({
    title: "",
    ingredients: "",
    category_id: "1",
    image_url: "",
  });

  const postData = (event) => {
    event.preventDefault();
    let bodyFormData = new FormData();
    bodyFormData.append("title", inputData.title);
    bodyFormData.append("ingredients", inputData.ingredients);
    bodyFormData.append("category_id", inputData.category_id);
    bodyFormData.append("image", image);

    console.log(bodyFormData);

    axios
      .post("http://localhost:4000/recipe", bodyFormData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        navigate("/list-recipe");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 2500,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  };
  const onChangePhoto = (e) => {
    setPhoto(e.target.files[0]);
    e.target.files[0] &&
      setInputData({
        ...inputData,
        photo_url: URL.createObjectURL(e.target.files[0]),
      });
    console.log(e.target.files);
  };

  return (
    <>
      <NavigationBar />
      <main className="mt-5">
        <Container>
          <Row>
            <Col md={8} className="mx-auto">
              <Form onSubmit={postData}>
                <Card className="mb-4 image-card">
                  {image && (
                    <img
                      src={inputData.image_url}
                      alt="image"
                      className="img-fluid w-100 d-block mx-auto upload-img"
                    />
                  )}

                  <div className="card-img-overlay">
                    <div className="d-flex justify-content-center align-items-center h-100">
                      <input
                        type="file"
                        name="image"
                        onChange={onChangePhoto}
                        id="formFile"
                        className="form-control bg-body-secondary w-50"
                      />
                    </div>
                  </div>
                </Card>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="title"
                    value={inputData.title}
                    onChange={onChange}
                    id="title"
                    className="py-3 bg-body-tertiary"
                    placeholder="Title"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    type="text"
                    name="ingredients"
                    value={inputData.ingredients}
                    onChange={onChange}
                    id="ingredients"
                    className="bg-body-tertiary"
                    placeholder="Ingredients"
                    rows={6}
                  />
                </Form.Group>
                <Row>
                  <Col md={4}>
                    <Form.Select className="py-3 bg-body-tertiary">
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
                    text_button="Post"
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

export default AddRecipe;
