import { Box } from "@mui/system";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Chip from "@mui/material/Chip";

function SingleFilm({ data }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
      <Card sx={{ minWidth: 370 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            minWidth="280"
            image={
              data.backdrop_path === null
                ? `/noimg.jpg`
                : `https://image.tmdb.org/t/p/w500${data.backdrop_path}`
            }
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {data.title}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Genres :
              {data.genres?.map((i) => (
                <Chip
                  sx={{ ml: 1 }}
                  label={i.name}
                  variant="outlined"
                  color="primary"
                />
              ))}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Status : {data.status}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Overview : {data.overview}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default SingleFilm;
