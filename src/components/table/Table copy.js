import React from "react";
import './table.css'

function Table({ currentRowIndex, showAnswerCells, randomNums }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Problem</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        {randomNums.map((row, index) => (
          <tr key={index}>
            {console.log(index)}
            <td>{`${row.var1} + ${row.var2}`}</td>
            <td className={`table ${showAnswerCells[index] ? "" : "hidden"}`}>
              {showAnswerCells[index] && index === currentRowIndex ? row.answer : ""}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
