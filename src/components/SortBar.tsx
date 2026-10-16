import React from "react";
import styles from "./SortBar.module.css";

type SortBarProps = {
  sortOption: string;
  onSortChange: (option: string) => void;
};

const SortBar = ({ sortOption, onSortChange }: SortBarProps) => {
  return (
    <div className={styles.sortBar}>
      <select value={sortOption} onChange={(e) => onSortChange(e.target.value)}>
        <option value="">Brak sortowania</option>
        <option value="title">Tytuł</option>
        <option value="author">Autor</option>
      </select>
    </div>
  );
};

export default SortBar;
