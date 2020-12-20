import React from "react";
import _ from "lodash";

const TableBody = (props) => {
  const { data, columns } = props;

  function renderCell(item, column) {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  }

  return (
    <tbody>
      {data.map((item) => (
        <tr>
          {columns.map((column) => (
            <td>{renderCell(item, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
