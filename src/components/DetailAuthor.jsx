import React from "react";
import Avatar from "../../public/images/avatar.jpg";
import { Container } from "react-bootstrap";

const DetailAuthor = (props) => {
  return (
    <>
      <div className="d-flex justify-content-between mb-5">
        <div className="d-flex align-items-center">
          <div className="border-start border-4 border-warning">
            <div className="d-flex ms-2">
              <img
                src={Avatar}
                className="rounded-circle"
                alt=""
                style={{ width: 40 }}
              />
            </div>
          </div>
          <div className="d-flex flex-column ms-4">
            <h6 className="mb-0">
              <a
                href="#"
                className="text-black"
                style={{ textDecoration: "none" }}
              >
                {props.authorname}
              </a>
            </h6>
            <p className="mb-0 text-start fw-bold">
              {props.recipetotal} Recipe
            </p>
          </div>
        </div>
        <div className="d-flex align-items-center text-end">
          <p className="mb-0">{props.date}</p>
        </div>
      </div>
    </>
  );
};

export default DetailAuthor;
