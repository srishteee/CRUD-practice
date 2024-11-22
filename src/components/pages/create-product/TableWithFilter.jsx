import React, { useState, useEffect } from "react";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [filterText, setFilterText] = useState("");

  const API_URL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        setSortedData(result); // Initialize sorted data
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const sortData = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sorted = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortedData(sorted);
    setSortConfig({ key, direction });
  };

  const handleFilter = (e) => {
    const text = e.target.value.toLowerCase();
    setFilterText(text);

    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(text)
    );

    setSortedData(filtered);
  };

  return (
    <div>
      <h1>Data Table with Sorting and Filtering</h1>
      <div>
        <label htmlFor="nameFilter">Filter by Name: </label>
        <input
          id="nameFilter"
          type="text"
          placeholder="Type a name"
          value={filterText}
          onChange={handleFilter}
        />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th onClick={() => sortData("id")}>
                ID {sortConfig.key === "id" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
              </th>
              <th onClick={() => sortData("name")}>
                Name {sortConfig.key === "name" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
              </th>
              <th onClick={() => sortData("email")}>
                Email {sortConfig.key === "email" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
              </th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DataTable;
