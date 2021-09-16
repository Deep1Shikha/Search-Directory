import React, { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const [received, setReceived] = useState([]);
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    console.log('Inside Effect');
    fetch('https://run.mocky.io/v3/da4fbd19-6666-4543-829c-df746b2101bc')
      .then(response => response.json())
      .then(data => {
        console.log('data inside', data.data);
        setReceived(data.data);
      });
  }, []);

  function clearHandler() {
    setSearch('');
  }

  function changeHandler(event) {
    setSearch(event.target.value);
    let found = received.filter(item =>
      item.employee_name.toLowerCase().includes(search)
    );
    setFiltered(found);
  }
  return (
    <>
      <label>Search</label>
      <input type="text" value={search} onChange={changeHandler} />
      <button onClick={clearHandler}>Clear</button>
      {filtered.map(item => {
        return (
          <div>
            <p key={item.id}>{item.employee_name}</p>
          </div>
        );
      })}
    </>
  );
}
