

const showSortDir = (sortInfo, colName) => {
  if (sortInfo.column === colName) {
    return "(" + sortInfo.direction + ")";
  }
};

export const SortColHeader = ({
  col,
  sortInfo,
  editMode,
  onSort: sort }) => {

  const colLabel = editMode
    ? <label htmlFor={col.editControlId}>{col.label}</label>
    : col.label;

  return (
    <th>
      <button onClick={() => sort(col.field)}>
        {colLabel} {showSortDir(sortInfo, col.field)}
      </button>
    </th>
  );

};

SortColHeader.defaultProps = {
  editMode: false,
};