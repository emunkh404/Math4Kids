import React from "react";

function Table({ showAnswerCells, randomNums }) {
  // Divide randomNums into groups of 10
  const groupedRandomNums = [];
  for (let i = 0; i < randomNums.length; i += 10) {
    groupedRandomNums.push(randomNums.slice(i, i + 10));
  }

  return (
    <div style={{ display: "flex" }}>
      {groupedRandomNums.map((group, groupIndex) => (
        <table key={groupIndex} style={{ marginRight: "10px" }}>
          <thead>
            <tr>
              <th>Problem</th>
              <th>Answer</th>
            </tr>
          </thead>
          <tbody>
            {group.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td>{`${row.var1} + ${row.var2}`}</td>
                <td>{showAnswerCells[rowIndex] ? row.answer : "="}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </div>
  );
}

export default Table;
