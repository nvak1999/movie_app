import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiService from "../app/apiService";
import { API_KEY } from "../app/config";
import SingleFilm from "../components/elements/SingleFilm";
function DetailPage() {
  let params = useParams();
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const reponse = await apiService.get(
          `3/movie/${params.id}?api_key=${API_KEY}&language=en-US`
        );
        const dataMovie = reponse.data;
        setData(dataMovie);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [data, params.id]);

  return (
    <Box>
      <SingleFilm data={data} />
    </Box>
  );
}

export default DetailPage;
