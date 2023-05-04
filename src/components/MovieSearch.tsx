import React from "react";
import styled from "styled-components";

const Parentdiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const Search = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SearcTitle = styled.h3`
  margin-bottom: 20px;
`;

const Searchbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: #1976d2;
  color: #fff;
  cursor: pointer;
`;

interface Props {
  searchmovie: string;
  setSearchMovie: React.Dispatch<React.SetStateAction<string>>;
  getMovie: () => void;
}

const MovieSearch: React.FC<Props> = ({
  searchmovie,
  setSearchMovie,
  getMovie,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchMovie(e.target.value);
  };

  return (
    <Parentdiv>
      <Search>
        <SearcTitle>Search Your Movie</SearcTitle>
        <Searchbox>
          <InputField
            type="search"
            value={searchmovie.toString()}
            onChange={handleChange}
          />
        </Searchbox>
        <Button onClick={getMovie}>Get Movie</Button>
      </Search>
    </Parentdiv>
  );
};

export default MovieSearch;
