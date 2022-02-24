import './SearchBar.css'
import { SearchBarProps } from '../../Interfaces'

export const SearchBar = ({ placeHolder, handleChange }: SearchBarProps) => (
  <input
    className="searchBar"
    type="search"
    placeholder={placeHolder}
    onChange={handleChange}
  />
)
