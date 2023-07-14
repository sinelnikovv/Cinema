import  {Box}  from "@mui/material";
import React from "react";
import { useGetUpcomingQuery } from "../../RTK/api";

const TopRandom =()=>{
  const {data, error, isError} = useGetUpcomingQuery({});

  return( 
  <Box>box</Box>
  )
  
  };

export default TopRandom;