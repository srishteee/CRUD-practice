// components/router/RoutingURLs.js

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from '../pages/header/Header';
import CreateProduct from '../pages/create-product/CreateProduct';
import GetProducts from '../pages/get-product/GetProducts';
import DataTable from "../pages/create-product/TableWithFilter";

export const RouterURLs = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/get-products" element={<GetProducts />} />
        <Route path="/filter-table" element={<DataTable/>} />
        
      </Routes>
    </Router>
  );
};
