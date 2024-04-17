import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SearchIngredients() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitFormHandler = (e) => {
    e.preventDefault();
    navigate("/ingredient" + input);
  };
  return (
    <div>
      <SearchFormStyle action="" onSubmit={submitFormHandler}>
        <div>
          <FaSearch></FaSearch>
          <input type="text" />
          <p>Input: </p>
        </div>
      </SearchFormStyle>
    </div>
  );
}

const SearchFormStyle = styled.form`
  margin: 0rem 20rem;

  div {
    width: 100%;
    position: relative;
  }

  input {
    width: 100%;
    border: none;
    background-color: rgb(253, 239, 214);
    font-size: 1.5rem;
    color: black;
    border-radius: 1.5rem;
    outline: none;
    padding: 1rem 2.5rem;
  }
`;

export default SearchIngredients;
