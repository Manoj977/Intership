// import React, { useEffect, useState } from "react";
// import { fetchCategoryData } from "../Api/apiService";
// const Main = () => {
//   const [categoriesData, setCategoriesData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [Name, setName] = useState("");
//   const [Desc, setDesc] = useState("");
//   useEffect(() => {
//     getAllCategories();
//   }, []);
//   const getAllCategories = async () => {
//     try {
//       setIsLoading(true);
//       const data = await fetchCategoryData();
//       setIsLoading(false);
//       setCategoriesData(data);
//     } catch (e) {
//       setIsLoading(false);
//       console.log(e);
//     }
//   };
//   const addCategory = async () => {
//     const addProduct = {
//       category_name: Name,
//       category_desc: Desc,
//     };
//     console.log(addProduct);
//   };
//   return (
//     <div>
//       All Categories
//       <br />
//       <br />
//       {!isLoading && (
//         <table border={1}>
//           <thead>
//             <tr>
//               <td>Category ID</td>
//               <td>Category Name</td>
//               <td>Category Desc</td>
//             </tr>
//           </thead>
//           <tbody>
//             {categoriesData.map((value, index) => (
//               <tr key={index}>
//                 <td>{value.category_id}</td>
//                 <td>{value.category_name}</td>
//                 <td>{value.category_desc}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//       {isLoading && <div>Data is Loading</div>}
//       <br />
//       <br />
//       <div>
//         <h1>Add New Categories</h1>

//         <input
//           type="text"
//           onChange={(e) => {
//             setName(e.target.value);
//           }}
//           value={Name}
//           placeholder="Category Name"
//         />
//         <br />
//         <input
//           onChange={(e) => {
//             setDesc(e.target.value);
//           }}
//           type="text"
//           value={Desc}
//           placeholder="Category Desc"
//         />
//         <br />
//         <button onClick={addCategory}>Submit</button>
//       </div>
//     </div>
//   );
// };

// export default Main;
