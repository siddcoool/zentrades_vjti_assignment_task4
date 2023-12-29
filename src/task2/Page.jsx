import React, { useEffect, useState } from "react";
import useApiData from "./useApiData"; // Assuming the custom hook is in useApiData.js
import "./page.css"; // Import the CSS file
import Loader from "./loader/loader";

const ProductList = () => {
  const [availableFields, setAvailableFields] = useState([]);
  const [displayFields, setDisplayFields] = useState([]);
  const [selectedAvailableFields, setSelectedAvailableFields] = useState([]);
  const [selectedDisplayFields, setSelectedDisplayFields] = useState([]);
  const {
    data: products,
    loading,
    error,
  } = useApiData("https://s3.amazonaws.com/open-to-cors/assignment.json");

  useEffect(() => {
    if (products.length) {
      const fields = Object.keys(products[0]); // Assuming the first object in the array contains all possible fields
      setAvailableFields(fields);
      setDisplayFields([]);
    }
  }, [products]);

  const handleAddField = () => {
    setDisplayFields([...displayFields, ...selectedAvailableFields]);
    setAvailableFields(
      availableFields.filter((f) => !selectedAvailableFields.includes(f))
    );
    setSelectedAvailableFields([]);
  };

  const handleRemoveField = () => {
    setAvailableFields([...availableFields, ...selectedDisplayFields]);
    setDisplayFields(
      displayFields.filter((f) => !selectedDisplayFields.includes(f))
    );
    setSelectedDisplayFields([]);
  };

  return (
    <div className="container">
      {loading && (
        <div className="loading">
          <Loader />
        </div>
      )}
      {error && <div className="error">Error: {error}</div>}
      {!loading && !error && (
        <div className="selectors">
          <div className="selection">
            <div>
              <h3>Available Fields</h3>
              <select
                className="available-fields"
                multiple
                size="5"
                value={selectedAvailableFields}
                onChange={(e) =>
                  setSelectedAvailableFields(
                    Array.from(
                      e.target.selectedOptions,
                      (option) => option.value
                    )
                  )
                }
              >
                {availableFields.map((field) => (
                  <option key={field} value={field}>
                    {field}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <button onClick={handleAddField}>&gt;&gt;</button>
              <button onClick={handleRemoveField}>&lt;&lt;</button>
            </div>

            <div>
              <h3>Fields to be Displayed</h3>
              <select
                className="displayed-fields"
                multiple
                size="5"
                value={selectedDisplayFields}
                onChange={(e) =>
                  setSelectedDisplayFields(
                    Array.from(
                      e.target.selectedOptions,
                      (option) => option.value
                    )
                  )
                }
              >
                {displayFields.map((field) => (
                  <option key={field} value={field}>
                    {field}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <h2>Products</h2>
            <table>
              <thead>
                <tr>
                  {displayFields.map((field) => (
                    <th key={field}>{field}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {products.map((item, index) => (
                  <tr key={index}>
                    {displayFields.map((field) => (
                      <td key={field}>{item[field]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
