import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { deleteProduct, fetchProducts } from "../../API/apiService";
const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getAllProducts();
  }, []);
  const getAllProducts = async () => {
    try {
      setIsLoading(true);
      const data = await fetchProducts();
      setIsLoading(false);
      setProductsData(data);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };
  const deleteC = async (product_id) => {
    prompt("need to delete");
    await deleteProduct(product_id);
    await getAllProducts();
  };

  const setData = async (datas) => {
    let {
      product_id,
      product_name,
      product_desc,
      product_price,
      product_image,
    } = datas;
    localStorage.setItem("product_id", product_id);
    localStorage.setItem("product_name", product_name);
    localStorage.setItem("product_desc", product_desc);
    localStorage.setItem("product_price", product_price);
    localStorage.setItem("product_image", product_image);
  };
  return (
    <div>
      <h2>List of Products</h2>
      <div className="content">
        {!isLoading && (
          <table>
            <thead>
              <tr>
                <td>Product Image</td>
                <td>Product Name</td>
                <td>Product Description </td>
                <td>Product Price </td>
                <td className="action" colSpan={2}>
                  Action
                </td>
              </tr>
            </thead>
            <tbody>
              {productsData.map((value, index) => (
                <tr key={index}>
                  <td>
                    <img
                      className="product_image"
                      src={value.product_image}
                      alt="product_image"
                    />
                  </td>
                  <td>{value.product_name}</td>
                  <td>{value.product_desc}</td>
                  <td>{value.product_price}</td>
                  <td>
                    <NavLink to="/updateProduct">
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
                      className="danger"
                      onClick={() => {
                        deleteC(value.product_id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {isLoading && <div>Data is Loading</div>}
            </tbody>
          </table>
        )}
      </div>
      <NavLink to="AddProduct">
        <button>Add New Product</button>
      </NavLink>

      <Outlet />
    </div>
  );
};

export default Products;
