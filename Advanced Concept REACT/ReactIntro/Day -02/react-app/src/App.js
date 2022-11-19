import "./App.css";

function App() {
  const employees = [
    { id: 1, name: "Alice", country: "Austria" },
    { id: 2, name: "Bob", country: "Belgium" },
    { id: 3, name: "Carl", country: "Canada" },
  ];
let results = employees.forEach((employee, index) => {
    <div key={index}>
      <h2>name: {employee.name}</h2>
      <h2>country: {employee.country}</h2>

      <hr />
    </div>;
  });
  return (
    <div>
      {/* {employees.map((employee, index) => {
        return (
          <div key={index}>
            <h2>name: {employee.name}</h2>
            <h2>country: {employee.country}</h2>

            <hr />
          </div>
        );
      })}

      <hr />
      <hr />
      <hr /> */}

      {results}
    </div>
  );
}

export default App;
