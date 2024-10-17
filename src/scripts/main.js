'use strict';

function cloneColumn(columnIndex) {
  const headRows = table.querySelectorAll('thead tr');
  const bodyRows = table.querySelectorAll('tbody tr');
  const footRows = table.querySelectorAll('tfoot tr');

  const insertClonedCell = (rows) => {
    rows.forEach((row) => {
      const cells = row.children;
      const clonedCell = cells[columnIndex].cloneNode(true);

      row.insertBefore(clonedCell, cells[cells.length - 1]);
    });
  };

  insertClonedCell(headRows);
  insertClonedCell(bodyRows);
  insertClonedCell(footRows);
}

const table = document.querySelector('table');

cloneColumn(table, 1);
