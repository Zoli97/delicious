import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks, GiDuck } from "react-icons/gi";
import { FaFish } from "react-icons/fa";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "../design/Category.css";
import "@splidejs/splide/css/core";
function Category() {
  return (
    <List>
      <MySplide
        options={{
          type: "slide",

          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "0.5rem",
        }}
      >
        <SplideSlide>
          <SLink to={"/cuisine/Italian"}>
            <FaPizzaSlice />
            <h5>Italian</h5>
          </SLink>
        </SplideSlide>
        <SplideSlide>
          <SLink to={"/cuisine/American"}>
            <FaHamburger />
            <h5>America</h5>
          </SLink>
        </SplideSlide>
        <SplideSlide>
          <SLink to={"/cuisine/Thai"}>
            <GiNoodles />
            <h5>Thai</h5>
          </SLink>
        </SplideSlide>

        <SplideSlide>
          <SLink to={"/cuisine/Japanese"}>
            <GiChopsticks />
            <h5>Japanese</h5>
          </SLink>
        </SplideSlide>
        <SplideSlide>
          <SLink to={"/cuisine/Nordic"}>
            <FaFish />
            <h5>Nordic</h5>
          </SLink>
        </SplideSlide>

        <SplideSlide>
          <SLink to={"cuisine/Vietnamese"}>
            <GiDuck />
            <h5>Vietnamese</h5>
          </SLink>
        </SplideSlide>

        <SplideSlide>
          <SLink to={"cuisine/Vietnamese"}>
            <GiDuck />
            <h5>Vietnamese</h5>
          </SLink>
        </SplideSlide>
      </MySplide>
    </List>
  );
}

const MySplide = styled(Splide)`
  box-shadow: 6px 0 4px -4px #878383, -6px 0 4px -4px #878383;
`;

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  text-decoration: none;
  background-color: rgb(253, 239, 214);
  width: 7rem;
  height: 7rem;
  cursor: pointer;
  transform: scale(0.8);

  @keyframes slow_rotation {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(30deg);
    }
  }
  :hover {
    animation: slow_rotation 1.2s ease-in;
  }

  svg {
    font-size: 1.7rem;
  }
`;

export default Category;
