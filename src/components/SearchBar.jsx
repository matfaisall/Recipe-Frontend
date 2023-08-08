import axios from "axios";
import React, { useState } from "react";
import "boxicons";

import { Form, InputGroup } from "react-bootstrap";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJmYWlzYWwiLCJlbWFpbCI6ImZhaXNhbEBnbWFpbC5jb20iLCJwaG90byI6bnVsbCwiY3JlYXRlZF9hdCI6IjIwMjMtMDgtMDZUMDQ6Mzk6MTMuNTY2WiIsImlhdCI6MTY5MTQ0NzM1MX0.Boo21QZ-lWfVLISyhGtISxkxFIbIH3fZVPS-g4idiNE";

const SearchBar = ({ setResult }) => {
  const [input, setInput] = useState("");
  const fetchData = (value) => {
    axios
      .get(`http://localhost:3000/recipe`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data.data)
      .then((data) => {
        const result = data.filter((recipe) => {
          return (
            value &&
            recipe &&
            recipe.title &&
            recipe.title.toLowerCase().includes(value)
          );
        });
        setResult(result);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <Form>
      <InputGroup className="mb-3">
        <InputGroup.Text
          id="inputGroup-sizing-default"
          className="border-0 bg-body-tertiary py-3"
        >
          <box-icon name="search" size="sm" color="gray"></box-icon>
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          className="bg-body-tertiary border-0"
          value={input}
          onChange={(event) => handleChange(event.target.value)}
        />
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
