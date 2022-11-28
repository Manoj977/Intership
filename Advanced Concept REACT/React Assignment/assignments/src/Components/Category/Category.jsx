import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  deleteCategory,
  fetchCategory,
  updateCategory,
} from "../../API/apiService";
import UpdateCategory from "./UpdatedCategory/UpdateCategory";

export const Category = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllCategories();
  }, []);
  const getAllCategories = async () => {
    try {
      setIsLoading(true);
      const data = await fetchCategory();
      setIsLoading(false);
      setCategoriesData(data);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };

  const deleteC = async (category_id) => {
    await deleteCategory(category_id);
    await getAllCategories();
  };
  const setData = async (data) => {
    let { category_id, category_name, category_desc } = data;
    localStorage.setItem("category_id", category_id);
    localStorage.setItem("category_name", category_name);
    localStorage.setItem("category_desc", category_desc);
  };
  return (
    <div className="categoryShown">
      <h3>List of Category</h3>
      {!isLoading && (
        <table>
          <thead>
            <tr>
              <td>Category ID</td>
              <td>Category Name</td>
              <td>Category Desc</td>
              <td className="action" colSpan={2}>
                Action
              </td>
            </tr>
          </thead>
          <tbody>
            {categoriesData.map((value, index) => (
              <tr key={index}>
                <td>{value.category_id}</td>
                <td>{value.category_name}</td>
                <td>{value.category_desc}</td>
                <td>
                <NavLink to="/update">

                  <button
                    onClick={() => {
                      setData(value);
                    }}
                    className="success"
                  >
                    Edit
                  </button>
                </NavLink>
              
                </td>
                <td>
                  <button
                    onClick={() => {
                      deleteC(value.category_id);
                    }}
                    className="danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {isLoading && <div>Data is Loading</div>}

      <NavLink to="newCategory">
        <button>Click to Add New Category</button>
      </NavLink>

      <Outlet />
    </div>
  );
};

export default Category;
