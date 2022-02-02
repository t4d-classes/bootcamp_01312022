

const showSortDir = (sortInfo, colName) => {
  if (sortInfo.column === colName) {
    return "(" + sortInfo.direction + ")";
  }
};

export const SortColHeader = ({ col, sortInfo, onSort }) => {

  return (
    <th>
      <button onClick={() => onSort(col.field)}>
        {col.label} {showSortDir(sortInfo, col.field)}
      </button>
    </th>
  );

};