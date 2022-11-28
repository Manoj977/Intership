import React, { useEffect, useState } from "react";
import { deleteProduct, fetchProducts } from "../../API/apiService";
import UpdateProduct from "./UpdateProduct/UpdateProduct";
const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [actionType, setactionType] = useState(null);
  const [selectedProduct, setselectedProduct] = useState({});

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
    await deleteProduct(product_id);
    alert("Deleted");
    await getAllProducts();
  };

  const setData = async (datas) => {};
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
                    <button
                      onClick={() => {
                        setactionType("update");
                      setselectedProduct(value);
                      }}
                      className="success"
                    >
                      Edit
                    </button>
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
      <button
        onClick={() => {
          setactionType("new");
        }}
      >
        Add New Product
      </button>
      {actionType !== null && (
        <UpdateProduct
          selectedProduct={selectedProduct}
          actionType={actionType}
          getAllProducts={getAllProducts}
        />
      )}
    </div>
  );
};

export default Products;
