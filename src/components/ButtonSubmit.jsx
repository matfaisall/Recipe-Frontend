import React from "react";
import { Button } from "react-bootstrap";

const ButtonSubmit = (props) => {
  return (
    <div>
      <Button
        type={props.type}
        className={`my-5 py-3 btn ${props.class}`}
        style={{ paddingRight: 90, paddingLeft: 90 }}
      >
        {props.text_button}
      </Button>
    </div>
  );
};

export default ButtonSubmit;
