import React from "react";
import { useNavigate } from "react-router-dom";
import { tableaux } from "../data/tableaux";
import "./TableauSelector.css";

const TableauSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="tableau-selector">
      <h2>Select a Tableau</h2>
      <ul className="table-list">
        {tableaux.map((tableau) => (
          <li key={tableau.id}>
            <button
              className="table-button"
              onClick={() => navigate(`/tableau/${tableau.id}`)}
            >
              {tableau.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableauSelector;
