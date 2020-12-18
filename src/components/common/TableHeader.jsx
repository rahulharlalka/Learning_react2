import React from "react";

function TableHeader(props) {
  const { columns, sortColumn, onSort } = props;

  function raiseSort(path) {
    const newSortColumn = { ...sortColumn };
    if (sortColumn.path === path)
      newSortColumn.order = newSortColumn.order === "asc" ? "desc" : "asc";
    else {
      newSortColumn.path = path;
      newSortColumn.order = "asc";
    }
    onSort(newSortColumn);
  }

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={column.path || column.key}
            onClick={() => raiseSort(column.path)}
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
