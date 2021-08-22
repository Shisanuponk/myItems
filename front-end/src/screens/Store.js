import React, { useState } from "react";
import styled from "styled-components";

// Style Navbar Search
const NavbarSearch = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid black;

  form > input {
    width: 500px;
    height: 25px;
    text-align: center;
  }
`;
const Store = () => {
  const [keySearch, setKeySearch] = useState("");
  const onSearch = (evt) => {
    evt.preventDefault();
    alert(keySearch);
  };

  return (
    <div>
      <NavbarSearch>
        <form onSubmit={onSearch}>
          <input
            type="text"
            placeholder="Search something"
            value={keySearch}
            onChange={(evt) => setKeySearch(evt.target.value)}
          />
        </form>
      </NavbarSearch>
    </div>
  );
};

export default Store;
