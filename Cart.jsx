import React from 'react'
import { connect } from "react-redux";
import {removeFromCart } from "../actions";
import {
  Box,
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const Cart = (props) => {
  let { cartItems } = props.cart;

  return (
    <div>
       <Box>
        <ImageList className="flex flex-wrap">
          {
            cartItems.length > 0 ? (

              cartItems.map((item) => (
                <Card
                  sx={{
                    maxWidth: 280,
                    p: 1,
                    minHeight: 350,
                    position: "relative",
                    m: 1,
                  }}
                  key={item.id}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    image={`${item.image}`}
                    className="p-5 max-h-32 object-contain hover:scale-125 transition-transform"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="subtitle2" component="h6">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description.split(" ").splice(0, 13).join(" ") + "..."}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ position: "absolute", bottom: 8 }}>
                  <Button
                        size="small"
                        variant="outlined"
                        color="error"
                        onClick={() => {
                          props.dispatch(removeFromCart(item.id));
                        }}
                      >
                        Remove from cart
                      </Button>
                  </CardActions>
                </Card>
              ))


            ) : (
              <Typography variant='h4' className='bg-yellow-100 p-6 w-full text-center'>cart is Empty..!</Typography>
            )
         
          }
        </ImageList>
      </Box>
    </div>
  )
}
function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}
export default connect(mapStateToProps)(Cart)