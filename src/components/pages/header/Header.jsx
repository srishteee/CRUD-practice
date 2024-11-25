import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import GetProduct from "../get-product/GetProducts";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const handleGetProduct= () => {
          // Redirect to the desired URL
          navigate("/get-products");
        };
   const handleCreateProduct = () => {
       navigate("/create-product");
   };

   const handleDataTableFilter = ()=>{
    navigate("/filter-table");
   }
  
   const handleCounter =() =>{
    navigate("/counter");
   }




  return (
    <AppBar position="fixed" sx={{ width: "100%" }}>
      <Toolbar>
        {/* Menu Icon */}
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>

        {/* Left Buttons */}
        <Button onClick={handleCreateProduct} color="inherit" sx={{ mr: 2 }}>
          Create Product
        </Button>
        <Button onClick={ handleGetProduct} color="inherit" sx={{ mr: 2 }}>
          Get Products
        </Button>

        <Button onClick={ handleDataTableFilter} color="inherit" sx={{ mr: 2 }}>
          Data Table
        </Button>

        <Button onClick={ handleCounter} color="inherit" sx={{ mr: 2 }}>
          Counter
        </Button>

        {/* Title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CRUD Products
        </Typography>

        {/* Login Button */}
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
