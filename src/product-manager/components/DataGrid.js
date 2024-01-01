export default function DataGrid({ title, data }) {
  const columns = Object.keys(data[0]);
  let header = (
    <tr>
      {columns.map((column) => (
        <th key={column}>{column}</th>
      ))}
    </tr>
  );

  let content = data.map((row, index) => (
    <tr key={index}>
      {columns.map((column) => (
        <td key={column}>{row[column]}</td>
      ))}
    </tr>
  ));

  return (
    <div className="data-grid">
      <h1>{title}</h1>
      <table>
        <thead>{header}</thead>

        <tbody>{content}</tbody>
      </table>
    </div>
  );
}
