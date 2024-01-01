export default function Country({ key, name, flag, officalName, arabicName }) {
  return (
    <div key={key} className="country">
      <div>
        <img src={flag} alt={name} width={100} />
        <span>{name}</span>
      </div>
      <p>{officalName}</p>
      <p
        style={{
          textAlign: "right",
        }}
      >
        {arabicName}
      </p>
    </div>
  );
}
