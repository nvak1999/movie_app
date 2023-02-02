import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import apiService from "../app/apiService";
import { API_KEY } from "../app/config";
import { Box } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import AllMovie from "../components/elements/AllMovie";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function HomePage() {
  const [page, setPage] = useState(1);
  const [data_movie, setData_movie] = useState([]);
  const [genre, setgenre] = useState("Top movie");
  const [keywords, setkeywords] = useState("");
  const [search, setSearch] = useState("");
  const handleChange_keywords = () => {
    setkeywords(search);
  };
  const handleChange_genres = (event) => {
    setgenre(event.target.value);
  };

  const handleChange_page = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reponse = await apiService.get(
          `3/discover/movie?api_key=${API_KEY}&language=en-US&page=${page}&with_genres=${genre}&with_keywords=${keywords}&with_watch_monetization_types=flatrate`
        );
        console.log(
          `3/discover/movie?api_key=${API_KEY}&language=en-US&page=${page}&with_genres=${genre}&with_keywords=${keywords}&with_watch_monetization_types=flatrate`
        );
        const data = reponse.data.results;
        setData_movie(data);
        console.log(keywords);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page, genre, keywords]);
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            m: 3,
          }}
        >
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="ddemo-simple-select-standard-label">
              Genres
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-select-standard"
              value={genre}
              label="Age"
              onChange={handleChange_genres}
            >
              <MenuItem value="">Top movie</MenuItem>
              <MenuItem value="28">Action</MenuItem>
              <MenuItem value="12">Adventure</MenuItem>
              <MenuItem value="16">Animation</MenuItem>
              <MenuItem value="35">Comedy</MenuItem>
              <MenuItem value="80">Crime</MenuItem>
              <MenuItem value="99">Documentary</MenuItem>
              <MenuItem value="18">Drama</MenuItem>
              <MenuItem value="10751">Family</MenuItem>
              <MenuItem value="14">Fantasy</MenuItem>
              <MenuItem value="27">Horror</MenuItem>
            </Select>
          </FormControl>
          <Box>
            <TextField
              sx={{ height: 50 }}
              id="outlined-basic"
              label="Search"
              variant="outlined"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button
              sx={{ height: 55, ml: 1 }}
              variant="contained"
              onClick={handleChange_keywords}
            >
              <SearchIcon />
            </Button>
          </Box>
        </Box>
        <Typography variant="h4" sx={{ alignSelf: "flex-start" }}>
          🎥{" "}
          {genre === "27"
            ? "Horror"
            : genre === "28"
            ? "Action"
            : genre === "12"
            ? "Adventure"
            : genre === "16"
            ? "Animation"
            : genre === "35"
            ? "Comedy"
            : genre === "80"
            ? "Crime"
            : genre === "99"
            ? "Documentary"
            : genre === "99"
            ? "Documentary"
            : genre === "18"
            ? "Drama"
            : genre === "10751"
            ? "Family"
            : genre === "14"
            ? "Fantasy"
            : "Top movie"}
        </Typography>

        <AllMovie data={data_movie} />
        <Pagination
          count={100}
          color="primary"
          sx={{ alignSelf: "center", m: 2 }}
          onChange={handleChange_page}
        />
      </Box>
    </Box>
  );
}

export default HomePage;
