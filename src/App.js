import React, { useState } from "react";

// Test data - Do not modify
const contacts = [
  { id: 1, name: "Alice Smith", phone: "555-1234" },
  { id: 2, name: "Bob Johnson", phone: "555-5678" },
  { id: 3, name: "Charlie Davis", phone: "555-8765" },
  { id: 4, name: "Diana Evans", phone: "555-4321" },
  { id: 5, name: "Edward Harris", phone: "555-6789" },
];

function App() {
  // Your code here
  // Hints:
  // 1. Use useState to track the search term.
  // 2. Create a function to handle search input changes.
  // 3. Filter contacts based on the search term.
  // 4. Use .map() to render the filtered contacts.

  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="text-center">
      {/* Your JSX here */}
      <h1>Contact List</h1>
      <input
        type="search"
        placeholder="Search contact here...."
        value={search}
        onChange={handleSearch}
      ></input>
      <div>
        {contacts
          .filter((contact) =>
            contact.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((contact) => {
            return (
              <div
                key={contact.id}
                className="mb-2 d-flex justify-content-between align-items-center p-4 border"
              >
                <div>
                  {contact.name} - {contact.phone}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
