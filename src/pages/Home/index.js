import React, { useState } from 'react';

import getPassengerIndex from '../../lib/getPassengerIndex';

function Home({ flightNumber, setFlightNumber, setPassengerIndex, history }) {
  const [ lastName, setLastName ] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (flightNumber && lastName) {
      try {
        const passengerIndex = await getPassengerIndex(flightNumber, lastName);
    
        if (passengerIndex >= 0) {
          console.log(passengerIndex)
          setPassengerIndex(passengerIndex);
          history.push("/passenger-info");
        } else {
          console.log("Flight or passenger not found")
        }
      } catch {
        console.log("server error")
      }
    } else {
      console.log("please add the requested information")
    }
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