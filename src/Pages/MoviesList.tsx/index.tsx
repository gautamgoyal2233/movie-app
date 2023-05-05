import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import {
  SingleMovieContainer,
  SingleMovieData,
  Image,
  ListD,
} from "../../assests/styles";

const SingleMovie: React.FC = () => {
  const { id } = useParams<string>();

  const getData = async () => {
    const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_KEY}`);
    return res.json();
  };

  const { data, isError, isLoading } = useQuery("movie", getData);

  if (isError) return <h1>Error..</h1>;
  if (isLoading) return <h1>Loading</h1>;

  return (
    <SingleMovieContainer>
      <Image src={data.Poster} alt="img" />
      <SingleMovieData>
        <h1>{data.Title}</h1>
        <p>Year: {data.Year}</p> <ListD>Rated: {data.Rated}</ListD>{" "}
        <p>Runtime: {data.Runtime}</p> <ListD>Genre: {data.Genre}</ListD>{" "}
        <p>Director: {data.Director}</p> <ListD>Writer: {data.Writer}</ListD>{" "}
        <p>Actors: {data.Actors}</p> <ListD>Plot: {data.Plot}</ListD>{" "}
        <p>Language: {data.Language}</p>{" "}
      </SingleMovieData>
    </SingleMovieContainer>
  );
};

export default SingleMovie;
