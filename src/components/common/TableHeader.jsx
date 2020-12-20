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

  function renderSortIcon(column) {
    if (column.path !== props.sortColumn.path) return null;
    if (props.sortColumn.order === "asc")
      return <i className="fa  fa-sort-asc"></i>;
    return <i className="fa fa-sort-desc"></i>;
  }

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            className="clickable"
            key={column.path || column.key}
            onClick={() => raiseSort(column.path)}
          >
            {column.label}
            {renderSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
