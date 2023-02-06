import * as React from "react";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";

import { CardActionArea } from "@mui/material";

function Film({ film_data }) {
  return (
    <Card
      sx={{
        maxWidth: 500,
        minWidth: 280,

        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        alignSelf: "center",
        m: 1,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={`https://image.tmdb.org/t/p/w500${film_data.poster_path}`}
          alt="green iguana"
        />
      </CardActionArea>
    </Card>
  );
}

export default Film;
