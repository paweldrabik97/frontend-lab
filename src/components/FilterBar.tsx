import React from "react";

const FilterBar = () => {
  return (
    <>
      <select>
        <option value="">Wszystkie</option>
        <option value="fantastyka">Fantastyka</option>
        <option value="kryminał">Kryminał</option>
        <option value="reportaż">Reportaż</option>
        <option value="informatyka">Informatyka</option>
      </select>
      <label>
        <input type="checkbox" />
        Tylko dostępne
      </label>
    </>
  );
};

export default FilterBar;
