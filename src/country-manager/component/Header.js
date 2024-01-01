export default function Header({ title }) {
  return (
    <div className="header">
      <img src="icons/favicon.ico" alt="logo" />
      <h1>{title}</h1>
    </div>
  );
}
