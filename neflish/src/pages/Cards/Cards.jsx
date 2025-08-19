import React, { useEffect, useState } from "react";
import "./Cards.css";
import Cards_data from "../../assets/cards/Cards_data";
import cards_data from "../../assets/cards/Cards_data";

const Cards = ({ title, category }) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGY1OGU3ZjhmODVlYjc3Y2I4YTRlMWY0YzExZDVjZCIsIm5iZiI6MTc1NTU3NTkyNS4wNDcwMDAyLCJzdWIiOiI2OGEzZjY3NTVkYWI5NDAzMGJkYTU4YWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.95LhLy1Rs9QPkCbT4RL6HgjgsNg1H2ZqwZzmv49NHuA",
    },
  };

  const [movieData, setMovieData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${
          category ? category : now_playing
        }?language=en-US&page=1`,
        options
      );
      if (!res.ok) {
        throw new Error("Can not fetch");
      }
      const data = await res.json();
      setMovieData(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="cards">
      <h2>{title ? title : "Popular Movies"}</h2>
      <div className="cards-list">
        {movieData.map((movie_data, index) => {
          console.log(movie_data);
          return (
            <div className="card-list" key={index}>
              <img
                src={
                  `https://image.tmdb.org/t/p/w500` + movie_data.backdrop_path
                }
                alt=""
              />
              <p>{movie_data.original_title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
