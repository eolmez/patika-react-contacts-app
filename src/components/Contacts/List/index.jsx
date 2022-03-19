import { useState } from "react";

const List = ({ contacts }) => {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((contact) => {
    return Object.keys(contact).some((key) =>
      contact[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });
  console.log("filtered", filtered);

  return (
    <div>
      <input
        placeholder="Filter contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="list">
        {filtered.map((contact, i) => (
          <li key={i}>
            <span>{contact.fullname}</span>
            <span>{contact.phone_number}</span></li>
        ))}
      </ul>
      <p>Total contacts: {filtered.length}</p>
    </div>
  );
};

export default List;
