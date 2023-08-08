import axios from "axios";
import React, { useState } from "react";
import { Row, Col, Container, Form, Card } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import ButtonSubmit from "../components/ButtonSubmit";

import "./style/AddRecipe.css";
import { useNavigate } from "react-router-dom";

const AddRecipe = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJmYWlzYWwiLCJlbWFpbCI6ImZhaXNhbEBnbWFpbC5jb20iLCJwaG90byI6bnVsbCwiY3JlYXRlZF9hdCI6IjIwMjMtMDgtMDZUMDQ6Mzk6MTMuNTY2WiIsImlhdCI6MTY5MTQ0NzM1MX0.Boo21QZ-lWfVLISyhGtISxkxFIbIH3fZVPS-g4idiNE";

  // console.log(process.env.REACT_APP_JWT_TOKEN);
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(null);
  const [inputData, setInputData] = useState({
    title: "",
    ingredients: "",
    category_id: "1",
    photo_url: "",
  });

  const postData = (event) => {
    event.preventDefault();
    let bodyFormData = new FormData();
    bodyFormData.append("title", inputData.title);
    bodyFormData.append("ingredients", inputData.ingredients);
    bodyFormData.append("category_id", inputData.category_id);
    bodyFormData.append("photo", photo);

    console.log(bodyFormData);

    axios
      .post("http://localhost:3000/recipe", bodyFormData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        navigate("/");
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
                  {photo && (
                    <img
                      src={inputData.photo_url}
                      alt="image"
                      className="img-fluid w-100 d-block mx-auto upload-img"
                    />
                  )}

                  <div className="card-img-overlay">
                    <div className="d-flex justify-content-center align-items-center h-100">
                      <input
                        type="file"
                        name="photo"
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

// import axios from "axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// let token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJmYWlzYWwiLCJlbWFpbCI6ImZhaXNhbEBnbWFpbC5jb20iLCJwaG90byI6bnVsbCwiY3JlYXRlZF9hdCI6IjIwMjMtMDgtMDZUMDQ6Mzk6MTMuNTY2WiIsImlhdCI6MTY5MTMyNjAzMn0.xPNu8DTkV6L5SibJ3r7j_7eftq3kqbJoetZm5hHIbck`;

// export default function InputMenu() {
//   const navigate = useNavigate();
//   const [photo, setPhoto] = useState(null);
//   const [inputData, setInputData] = useState({
//     title: "",
//     ingredients: "",
//     category_id: "1",
//     photo_url: "",
//   });

//   const postData = (event) => {
//     event.preventDefault();
//     let bodyFormData = new FormData();
//     bodyFormData.append("title", inputData.title);
//     bodyFormData.append("ingredients", inputData.ingredients);
//     bodyFormData.append("category_id", inputData.category_id);
//     bodyFormData.append("photo", photo);

//     console.log(bodyFormData);

//     axios
//       .post("http://localhost:3000/recipe", bodyFormData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .then((res) => {
//         console.log(res);
//         navigate("/");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const onChange = (e) => {
//     setInputData({ ...inputData, [e.target.name]: e.target.value });
//     console.log(inputData);
//   };
//   const onChangePhoto = (e) => {
//     setPhoto(e.target.files[0]);
//     e.target.files[0] &&
//       setInputData({
//         ...inputData,
//         photo_url: URL.createObjectURL(e.target.files[0]),
//       });
//     console.log(e.target.files);
//   };

//   return (
//     <div className="container">
//       <h1>Input Menu</h1>
//       <form onSubmit={postData} className="row col-6 gap-2">
//         <input
//           type="text"
//           name="title"
//           value={inputData.title}
//           className="form-control col-4"
//           onChange={onChange}
//           placeholder="title"
//         />
//         <input
//           type="text"
//           name="ingredients"
//           value={inputData.ingredients}
//           className="form-control col-4"
//           onChange={onChange}
//           placeholder="ingredients"
//         />
//         <input
//           type="file"
//           name="photo"
//           className="form-control col-4"
//           onChange={onChangePhoto}
//           placeholder="photo"
//         />
//         {photo && <img src={inputData.photo_url} width={200} />}

//         <button type="submit" className="btn btn-warning">
//           Submit Menu
//         </button>
//       </form>
//     </div>
//   );
// }
