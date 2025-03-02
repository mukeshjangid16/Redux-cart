import { Paper, Grid, Typography, Box, Button } from "@mui/material";
import React from "react";
import HeroImage from "../assests/hero-img.png";
import CartIllustration from "../assests/illu-cart.png";
import BagIllustration from "../assests/illu-bag.png";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Box className="m-4 p-4">
      <Grid container gap={1}>
        <Grid item md={6} className="flex flex-col items-start justify-center">
          <Typography className="font-playfair text-5xl font-bold tracking-wide">
            Each <span className="text-yellow-600 ">Purchase</span> will be{" "}
            <br /> made with pleasure..!
          </Typography>
         
          <Link to="/products">
          <Button
            variant="contained"
            endIcon={<PlayArrowIcon />}
            className="bg-yellow-400 text-gray-900 text-md font-extrabold hover:bg-yellow-500 my-4"
          >
          Purchase Now
          </Button>
          </Link>
        </Grid>
        <Grid item md={5} className="flex justify-end relative">
          <img src={HeroImage} alt="shopping-img" className="z-10" />
          <img
            className="absolute top-2/4 left-1/4 w-2/4 animate-[wiggle_2s_ease-in-out_infinite]"
            src={CartIllustration}
            alt="illustation"
          />
          <img
            className="absolute bottom-0 right-0 w-40 z-20 animate-bounce"
            src={BagIllustration}
            alt="illustation"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
