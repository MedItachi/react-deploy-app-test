export default function ButtonPanel({ labels }) {
  let buttons = labels.map((label, index) => {
    return <button key={index}>{label}</button>;
  });
  return <div className="button-panel">{buttons}</div>;
}
