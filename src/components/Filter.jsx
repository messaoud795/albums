import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateFilter } from "../actions/albums_actions";
import "./Filter.css";
export default function Filter() {
  const [value, setValue] = useState("All");
  // state to show or hide the filter
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  //dispath action to update the filter value in store
  const handleSubmit = (event) => {
    event.preventDefault();
    updateFilter(dispatch, value);
  };
  //dispath action to reset the filter value in store
  const handleReset = (event) => {
    event.preventDefault();
    updateFilter(dispatch, "All");
    setValue("All");
  };
  return (
    <div className="filter">
      <button className="filter__title" onClick={() => setVisible(!visible)}>
        Filter
      </button>
      {visible && (
        <form className="filter__form">
          <select
            value={value}
            onChange={(e) => handleChange(e)}
            className="filter__select"
          >
            <option value="All">All</option>
            <option value="LOCAL">Local</option>
            <option value="QOBUZ">Qobuz</option>
          </select>
          <button className="filter__reset" onClick={handleReset}>
            Reset
          </button>
          <button className="filter__submit" onClick={handleSubmit}>
            confirm
          </button>
        </form>
      )}
    </div>
  );
}
