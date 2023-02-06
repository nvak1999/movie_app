import React from "react";
import Film from "./Film";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
function AllMovie({ data }) {
  return (
    <Grid container wrap="wrap">
      {data
        .filter((e) => e.poster_path && e.poster_path !== null)
        .map((e) => (
          <Grid container justifyContent="center" lg={3} md={4} xs={12}>
            <Link style={{ textDecoration: "none" }} to={`/movie/${e.id}`}>
              <Film film_data={e} />
            </Link>
          </Grid>
        ))}
    </Grid>
  );
}

export default AllMovie;
