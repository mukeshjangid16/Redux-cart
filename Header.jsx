import { Box, Typography, Menu, MenuItem } from "@mui/material";
import React from "react";
import CartItemIcon from "../assests/cart-item-icon.png";
import EmptyCart from "../assests/empty-cart.gif";
import { connect } from "react-redux";

const Header = ({ cart: { cartItems } }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="p-6 flex justify-end gap-4 items-center pr-16 shadow-lg">
      <Box className="relative cursor-pointer" onClick={handleClick}>
        <img src={CartItemIcon} width="30px" alt="cat-icon" />
        {cartItems.length > 0 && (
          <span className="absolute top-0 left-3 block bg-blue-600 rounded-full w-3 h-3"></span>
        )}
      </Box>
      {cartItems.length > 0 && (
        <Typography variant="h6">cart : {cartItems.length}</Typography>
      )}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        
      >
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <MenuItem onClick={handleClose} key={item.id} sx={{maxWidth:'350px',overflowX:'hidden'}}>
              <Typography>{item.title}</Typography>
            </MenuItem>
          ))
        ) : (
          <Box>
          <MenuItem onClick={handleClose}>
            <Box sx={{display:'flex'}}>
            <img src={EmptyCart} />
            <Typography variant="subtitle2">cart is Empty</Typography>
            </Box>
          </MenuItem>
          </Box>
        )}
      </Menu>
    </Box>
  );
};
function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}
export default connect(mapStateToProps)(Header);
