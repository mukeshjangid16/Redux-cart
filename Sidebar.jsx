import React from "react";
import { IconButton, Stack, Box, Typography } from "@mui/material";
import Logo from "../assests/logo.png";
import HomeIcon from "../assests/home-icon2.png";
import HomeIconActive from "../assests/home-icon2-active.png";
import CartIcon from "../assests/cart-icon2.png";
import CartIconActive from "../assests/cart-icon2-active.png";
import ProductsIcon from "../assests/products-icon.png";
import ProductsIconActive from "../assests/products-icon-active.png";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <Stack
      gap={8}
      alignItems="center"
      className="p-4 border-r-gray-300 border-r-2 shadow-xl min-h-screen"
    >
      <Stack direction={"row"} gap={0} alignItems="center" className="flex-col justify-center align-center lg:flex-row ">
        <IconButton>
          <img src={Logo} alt="logo" />
        </IconButton>
        <Typography className="text-xl font-extrabold font-playfair text-[16px] md:text-xl">
          Shopping Cart
        </Typography>
      </Stack>
      <Stack>
        <Typography variant="p" className="text-2xl font-nunito font-extrabold md:text-lg">
          Explore
        </Typography>
        <Box className="flex gap-4 m-2 mt-8 items-center">
        <NavLink
              className={(navData) =>
                navData.isActive
                  ? "text-yellow-500 font-bold flex gap-4 m-2 items-center"
                  : "font-bold transition-colors flex gap-4 m-2 items-center"
              }
              to="/"
            >
          <img
            src={pathname === "/" ? HomeIconActive : HomeIcon}
            width="25px"
            alt="home-icon"
            className="md:w-5 lg:w-7"
          />
          <Typography className="font-nunito uppercase tracking-wider sm:hidden md:block md:text-md lg:text-lg xl:text-xl">
       
              Home
          </Typography>
            </NavLink>
        </Box>
        <Box className="flex gap-4 m-2 items-center">
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "text-yellow-500 font-bold flex gap-4 m-2 items-center"
                  : "font-bold transition-colors flex gap-4 m-2 items-center"
              }
              to="products">
          <img
            src={pathname === "/products" ? ProductsIconActive : ProductsIcon}
            width="25px"
            alt="cart-icon"
            className="md:w-5 lg:w-7"
          />
          <Typography className="font-nunito uppercase tracking-wider sm:hidden md:block md:text-md lg:text-lg xl:text-xl">
          
              Products
          </Typography>
            </NavLink>
        </Box>
        <Box className="flex gap-4 m-2 items-center">
        <NavLink
              className={(navData) =>
                navData.isActive
                  ? "text-yellow-500 font-bold flex gap-4 m-2 items-center"
                  : "font-bold transition-colors flex gap-4 m-2 items-center"
              }
              to="cart">
          <img
            src={pathname === "/cart" ? CartIconActive : CartIcon}
            width="25px"
            alt="cart-icon"
            className="md:w-5 lg:w-7"
          />
          <Typography className="font-nunito uppercase tracking-wider sm:hidden md:block md:text-md lg:text-lg xl:text-xl">
           
              Cart
          </Typography>
            </NavLink>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Sidebar;
