import React, { useState } from 'react';

function Home({ flightNumber, setFlightNumber }) {
  const [ lastName, setLastName ] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(flightNumber, lastName);
  }

  return (
    <div>
      <h1>Welcome to your web check-in</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="flight #"
          value={flightNumber}
          onChange={(event) => setFlightNumber(event.target.value)}
        />
        <input
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <button type="submit">Search flight</button>
      </form>
    </div>
  );
}

export default Home;