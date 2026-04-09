export default function BlockView({ blocks }) {
  return (
    <div>
      <h3>Blockchain</h3>
      {blocks.map((b, i) => (
        <div key={i} className="block">
          Block {i+1} → {b}
        </div>
      ))}
    </div>
  );
}