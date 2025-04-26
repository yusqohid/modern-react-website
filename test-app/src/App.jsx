import { useState } from "react";

function NameList({ names, onDelete }) {
  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>
          {name}
          <button onClick={() => onDelete(index)}>Hapus</button>
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  const [names, setNames] = useState(['Yusqo', 'Dime', 'Budi']);
  const [input, setInput] = useState('');

  const handleChange = (e) => setInput(e.target.value);

  const handleAdd = () => {
    if (input.trim() !== '') {
      setNames([...names, input.trim()]);
      setInput('');
    }
  }

  const handleDelete = (indexToDelete) => {
    setNames(names.filter((_, i) => i !== indexToDelete));
  };

  return (
    <div>
      <h1>Daftar Nama</h1>
      <input type="text" value={input} placeholder="Tambah nama.." onChange={handleChange} />
      <button onClick={handleAdd}>Tambah</button>

      <NameList names={names} onDelete={handleDelete} />
    </div>
  );
}
