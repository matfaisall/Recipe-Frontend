import React from "react";

const SearchResultList = ({ item }) => {
  // console.log(item.title);
  return <div className="py-2 px-2">{item.title}</div>;
};

export default SearchResultList;
