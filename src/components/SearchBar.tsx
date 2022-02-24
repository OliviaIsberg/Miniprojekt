import React, {} from "react";
import { Routes } from "react-router-dom";
import "./SearchBar.css";
import { SearchBarProps } from "../Interfaces";

export const SearchBar = ({ placeHolder, handleChange }: SearchBarProps) => (
  <input
    className="searchBar"
    type="search"
    placeholder={placeHolder}
    onChange={handleChange}
  />
);

