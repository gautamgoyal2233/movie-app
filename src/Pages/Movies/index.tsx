import React from "react";
import { useQuery } from "react-query";
import {
  Parentdiv,
  Searchbox,
  SearcTitle,
  Search,
  MovieContainer,
  MovieCard,
  Button,
  InputField,
  IMG,
} from "../../assests/styles";
import { Link } from "react-router-dom";
import { apidata } from "./interface.config";

const MoviesData: React.FC = () => {
 
  //   let searchstring: string ;

  const [searchmovie, setSearchMovie] = React.useState<string>("inception");
  const [finals, setFinals] = React.useState<string>("inception");

  const getData = async () => {
    const res = await fetch(
      `http://www.omdbapi.com/?s=${finals}&apikey=${process.env.REACT_APP_KEY}`
    );

    return res.json();
  };

  const { data, isError, isLoading } = useQuery(`${finals}`, getData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchMovie(e.target.value);
  };
  const getMovie = () => {
    setFinals(searchmovie);
    getData();
  };

  if (isLoading) return <h1>Loading</h1>;
  if (isError) return <h1>error...</h1>;

  return (
    <>
      <Parentdiv>
        <Search>
          <SearcTitle>Search Your Movie</SearcTitle>
          <Searchbox>
            <InputField
              type="search"
              value={searchmovie}
              onChange={handleChange}
            />
          </Searchbox>
          <Button onClick={getMovie}>Get Movie</Button>
        </Search>
      </Parentdiv>

      <MovieContainer>
        {data?.Response === "False" ? (
          <h1>Movie not found!</h1>
        ) : (
          data?.Search?.map((item: apidata, id: number) => {
            return (
              <div key={id}>
                <Link className="container" to={`/movie/${item.imdbID}`}>
                  <MovieCard>
                    {<IMG src={item.Poster} alt="img" />}
                    <h1>Title - {item.Title}</h1>
                    <h3>Year - {item.Year}</h3>
                    <h3>Type - {item.Type}</h3>
                  </MovieCard>
                </Link>
              </div>
            );
          })
        )}
      </MovieContainer>
    </>
  );
};

export default MoviesData;
