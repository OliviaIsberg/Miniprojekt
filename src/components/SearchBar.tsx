import React, {} from "react";
import { Routes } from "react-router-dom";
import "./SearchBar.css";

interface SearchBarProps{
    placeHolder: string
    handleChange: React.ChangeEventHandler
}

export const SearchBar = ({ placeHolder, handleChange }: SearchBarProps) => (
  <input
    className="searchBar"
    type="search"
    placeholder={placeHolder}
    onChange={handleChange}
  />
);

