import styled from "styled-components";

export const Nav = styled.div`
  background-color: #495a8f;
  display: flex;
  align-items: center;
  border: 1px solid black;
  justify-content: center;

  color: black;
  height: 50px;
`;

export const Parentdiv = styled.div`
  height: 100%;
  width: 1400px;
  background-color: #bedcff;
  margin-left: 12px;
`;

export const Search = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  border: 1px solid black;
  justify-content: center;
`;

export const SearcTitle = styled.div`
  font-size: larger;

  margin-right: 10px;
`;

export const Searchbox = styled.div``;

export const Navtext = styled.p`
  font-weight: bold;
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 8px;
  flex: 1;
  min-width: 300px;
  max-width: 400px;
  flex: 1;
  width: 300px;
  height: 700px;
`;

export const InputField = styled.input`
  padding: 2%;
  border-radius: 2%;
`;

export const Searchbutton = styled.input``;

export const Button = styled.button`
  background-color: black;
  color: white;
  padding: 3px;
`;

export const SingleMovieContainer = styled.div`
  display: flex;
  margin: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;
export const Image = styled.img`
  width: 300px;
  height: 450px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const SingleMovieData = styled.div`
  padding: 20px;
`;

export const ListD = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const IMG = styled.img`
  width: 300px;
  height: 450px;
`;
