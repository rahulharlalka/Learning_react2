import React from "react";
import TableHeader from "./TableHeader.jsx";
import TableBody from "./TableBody.jsx";

function Table({ columns, sortColumn, onSort, data }) {
  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody data={data} columns={columns} />
    </table>
  );
}

export default Table;
