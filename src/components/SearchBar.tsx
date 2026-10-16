import React from "react";
import styles from "./SearchBar.module.css";

type SearchBarProps = {
  searchQuery: string;
  onSearchChange: (query: string) => void;
};

const SearchBar = ({ searchQuery, onSearchChange }: SearchBarProps) => {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Szukaj (tytuł, autor)..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className={styles.input}
      />
    </div>
  );
};

export default SearchBar;
