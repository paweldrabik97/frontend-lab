import React from "react";
import styles from "./FilterBar.module.css";

type FilterBarProps = {
  genre: string;
  available: boolean;
  onGenreChange: (genre: string) => void;
  onAvailableChange: (available: boolean) => void;
};

const FilterBar = ({
  genre,
  available,
  onGenreChange,
  onAvailableChange,
}: FilterBarProps) => {
  return (
    <div className={styles.filterBar}>
      <select value={genre} onChange={(e) => onGenreChange(e.target.value)}>
        <option value="wszystkie">Wszystkie</option>
        <option value="fantastyka">Fantastyka</option>
        <option value="kryminał">Kryminał</option>
        <option value="reportaż">Reportaż</option>
        <option value="informatyka">Informatyka</option>
      </select>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          checked={available}
          onChange={(e) => onAvailableChange(e.target.checked)}
        />
        {" Tylko dostępne"}
      </label>
    </div>
  );
};

export default FilterBar;
