import React, { useEffect, useState } from "react";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiForkKnifeSpoon } from "react-icons/gi";

function App() {
  //render the home

  //when the spinner appear and disappear.
  // hook to ensure that a loader appears for a predetermined amount of time while our app loads.
  //use setTimeout to allow the loader to appears for 2 seconds while the page is being rendered
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <LoadContainer className="load-content">
          <Spinner className="spinner"></Spinner>
        </LoadContainer>
      ) : (
        <>
          <Nav>
            <GiForkKnifeSpoon style={{ color: "white" }} />
            <Logo to={"/"}>Delicious</Logo>
          </Nav>
          <Search />
          <Category />
          <Pages />
        </>
      )}
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  color: white;
  margin-left: 1rem;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`;

const LoadContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.834);
  z-index: 1;
`;

const Spinner = styled.div`
  width: 65px;
  height: 64px;
  border: 9px solid;
  border-color: #213391 transparent #3c5bf8 transparent;
  border-radius: 50%;
  animation: spin-animation 1.2s linear infinite;

  @keyframes spin-animation {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default App;
