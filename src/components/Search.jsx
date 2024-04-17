import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { AnimatePresence, motion } from "framer-motion";
import { useClickOutside } from "react-click-outside-hook";
import BounceLoader from "react-spinners/BounceLoader";
import { useDebouncer } from "../hooks/debouncerHook";
import "../design/Search.css";
function Search() {
  /** track is expanded or collapsed */
  //when the state is triggered and is expanded is true i want to show, animate the height prop of the FormSearchBar so if it focused and i want to expanded
  const [input, setInput] = useState("");
  const [isExpanded, setExpanded] = useState(false);
  const [isLoading, setLoading] = useState(false);
  // const [ref, isClickedOutside] = useClickOutside();

  const inputRef = useRef();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  const containerVariants = {
    expanded: {
      height: "20em",
    },
    collapsed: {
      height: "3.8em",
    },
  };
  //two controls functions
  //no argumetns whatever so i can now directly pass it through into the callback of any kind of event handler on the components.

  // const expandContainer = () => {
  //   setExpanded(true);
  // };

  const collapseContainer = () => {
    // setExpanded(false);
    // setLoading(false);

    setInput("");

    //when i type something and click outside of the input collapssed same for the close icon.
    //Need to hold the ref attr to the ref to the particular input
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const containerTransition = { type: "spring", damping: 22, stiffness: 130 };

  // useEffect(() => {
  //   if (isClickedOutside) collapseContainer();
  // }, [isClickedOutside]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <FormSearchBar
        action=""
        onSubmit={submitHandler}
        // animate={isExpanded ? "expanded" : "collpased"}
        variants={containerVariants}
        // ref={ref}
        transition={containerTransition}
      >
        <SearchInputContainer>
          <SearchIcon>
            <FaSearch />
          </SearchIcon>

          <SearchInput
            onChange={(e) => setInput(e.target.value)}
            type="text"
            value={input}
            className="input"
            placeholder="Search for Recipes"
            // onFocus={expandContainer}
            ref={inputRef}
          />

          <AnimatePresence>
            <CloseIcon
              key="close-icon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ oapcity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={collapseContainer}
            >
              <IoIosClose />
            </CloseIcon>
          </AnimatePresence>
        </SearchInputContainer>
        <LineSeparator />
        <SearchContent>
          <LoadingWrapper>
            <BounceLoader
              loading={true}
              color="#000"
              size={35}
              speedMultiplier={1.5}
            />
          </LoadingWrapper>
        </SearchContent>
      </FormSearchBar>
    </div>
  );
}
const FormSearchBar = styled(motion.form)`
  display: flex;
  flex-direction: column;
  width: 34em;
  height: 3.8em;
  background-color: rgb(253, 239, 214);
  border-radius: 1.5rem;
  overflow: hidden;

  .svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: black;
  }
`;

const SearchInputContainer = styled.div`
  width: 100%;
  min-height: 4em;
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px 15px;
`;
const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  min-width: 250px;
  border: none;
  outline: none;
  background-color: rgb(253, 239, 214);
  font-size: 1.4rem;
  color: black;
  border-radius: 1.5rem;
  padding: 1rem 1.5rem;

  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }

  &::placeholder {
    color: #474545;
    transition: all 250ms ease-in-out;
  }
`;

const CloseIcon = styled(motion.span)`
  color: black;
  font-size: 2rem;
  margin-top: 6px;
  vertical-align: middle;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #474545;
  }
`;

const SearchIcon = styled.span`
  color: black;
  font-size: 1.4rem;
  margin-right: 10px;
  margin-top: 6px;
  vertical-align: middle;
  transition: all 200ms ease-in-out;
  cursor: pointer;
`;

const LineSeparator = styled.span`
  display: flex;
  min-width: 100%;
  min-height: 2px;
  background-color: #474545;
`;

const SearchContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Search;
