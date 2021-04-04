import React from "react";
import SearchRounded from "@material-ui/icons/SearchRounded";
import style from "./SearchInput.module.css";

const SearchInput = ({ onchange }) => {
  return (
    <div className={style.Search}>
      <SearchRounded />
      <input placeholder={"search your country"} onChange={onchange} />
    </div>
  );
};
export default SearchInput;
