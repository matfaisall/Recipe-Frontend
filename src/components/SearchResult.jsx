import React from "react";
import SearchResultList from "./SearchResultList";

const SearchResult = ({ result }) => {
  const styles = {
    widthList: {
      width: "28rem",
      backgroundColor: "#43434u !important",
    },
  };

  return (
    <div className="position-absolute">
      <div className="bg-body-secondary rounded" style={styles.widthList}>
        {result.map((item, id) => {
          return <SearchResultList item={item} key={id} />;
        })}
      </div>
    </div>
  );
};

export default SearchResult;
