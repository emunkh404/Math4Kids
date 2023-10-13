import React from "react";

function Table({ showAnswerCells, randomNums }) {
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
            <td>{`${row.var1} + ${row.var2}`}</td>
            <td>{showAnswerCells[index] ? row.answer : ""}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
