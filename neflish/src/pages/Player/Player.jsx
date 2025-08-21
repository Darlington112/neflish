import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow from "../../assets/back_arrow_icon.png";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Player = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGY1OGU3ZjhmODVlYjc3Y2I4YTRlMWY0YzExZDVjZCIsIm5iZiI6MTc1NTU3NTkyNS4wNDcwMDAyLCJzdWIiOiI2OGEzZjY3NTVkYWI5NDAzMGJkYTU4YWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.95LhLy1Rs9QPkCbT4RL6HgjgsNg1H2ZqwZzmv49NHuA",
    },
  };

  function fetchData() {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="player">
      <img
        src={back_arrow}
        alt=""
        onClick={() => {
          navigate("/");
        }}
      />

      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="movie-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
