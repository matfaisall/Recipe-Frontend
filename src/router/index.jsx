import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Link,
} from "react-router-dom";
import Homepage from "../pages/Homepage";
import AddRecipe from "../pages/AddRecipe";
import ListAndSearchRecipe from "../pages/ListAndSearchRecipe";
import EditRecipe from "../pages/EditRecipe";

const Router = () => {
  const { menuId } = useParams();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/list-recipe" element={<ListAndSearchRecipe />} />
        <Route path="/edit-recipe/:menuId" element={<EditRecipe />} />
        <Route path="/delete" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
