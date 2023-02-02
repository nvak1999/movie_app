import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function Film({ film_data }) {
  return (
    <Card
      sx={{
        maxWidth: 350,
        minWidth: 250,
        minHeight: 300,
        maxHeight: 380,
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
          height="200"
          image={`https://image.tmdb.org/t/p/w500${film_data.backdrop_path}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {film_data.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Film;
