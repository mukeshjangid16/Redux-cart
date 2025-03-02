import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getProducts, addToCart, removeFromCart } from "../actions";
import { bindActionCreators } from "redux";
import axios from "axios";
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

const Products = (props) => {
  const [productsArray, setProductsArray] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    //props.dispatch(getProducts());
    async function getData() {
      const data = await axios
        .get("https://fakestoreapi.com/products")
        .then((res) => res.data);
      setloading(false);
      setProductsArray(data);
    }
    getData();
  }, []);
  // console.log("use Effect Run", props);
  let { cartItems } = props.cart;
  return (
    <Box className="p-4">
      <Typography className="text-xl font-bold uppercase" variant="p">
        Products{" "}
      </Typography>

      {
        loading && (
        <LoaderAnim/>
        )
      }

      <Box>
        <ImageList className="flex flex-wrap">
          {productsArray.map((item) => (
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
                {cartItems.some((cartItem) => cartItem.id === item.id) ? (
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
                ) : (
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => {
                      props.dispatch(addToCart(item));
                    }}
                  >
                    Add to cart
                  </Button>
                )}
              </CardActions>
            </Card>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};
function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}
// function mapDispatchToProps(dispatch){
//   return{
//     // getProducts:()=>dispatch(getProducts())
//     actions:bindActionCreators(getProducts,dispatch)
//   }
// }

function LoaderAnim(){
  const fakedata=[ 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
  return(
  <Box className="flex flex-wrap">
    {
        fakedata.map((data,index)=>(
      
          <Box className="border border-gray-300 shadow rounded-md p-4 w-52 m-4" key={index}>
          <Box className="animate-pulse flex flex-col items-center space-y-3 w-full">
            <Box className="rounded-full bg-slate-300 h-10 w-10"></Box>
            <Box className="flex-1 space-y-3 py-1 w-full">
              <Box className="h-4 bg-gray-400 rounded"></Box>
              <Box className="space-y-3">
                <Box className="grid grid-cols-12 gap-1 space-y-0">
                  <Box className="h-2 w-full bg-gray-300 rounded col-span-full"></Box>
                  <Box className="h-2 bg-gray-300 rounded col-span-8"></Box>              
                  <Box className="h-2 bg-gray-300 rounded col-span-4"></Box>              
                  <Box className="h-2 bg-gray-300 rounded col-span-4"></Box>              
                  <Box className="h-2 bg-gray-300 rounded col-span-8"></Box>              
                </Box>
                  <Box className="h-6 bg-blue-200 rounded w-1/4"></Box>
              </Box>
            </Box>
          </Box>
        </Box>
        
        ))
    }
  </Box>
  )
}
export default connect(mapStateToProps)(Products);
