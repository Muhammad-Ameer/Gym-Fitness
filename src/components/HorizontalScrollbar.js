import React, { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Typography, Grid, Stack, Pagination } from "@mui/material";

import BodyPart from "./BodyPart";

const HorizontalScrollbar = ({ data, setBodyPart, bodyPart }) => {
  
  return (
    <Grid container spacing={3}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
          
        </Box>
      ))}
      
    </Grid>
  );
}
  

  

export default HorizontalScrollbar;
