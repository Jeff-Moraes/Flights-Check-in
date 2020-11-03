import React, { useState } from 'react';

import getPassengerIndex from '../../lib/getPassengerIndex';

function Home({ flightNumber, setFlightNumber, lastName, setLastName, setPassengerIndex, history }) {
  const [ errorMessage, setErrorMessage ] = useState(null);

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
          setErrorMessage("Flight or passenger not found");
        }
      } catch {
        setErrorMessage("Flight or passenger not found")
      }
    } else {
      setErrorMessage("please add the requested information")
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
        {errorMessage && <p>{errorMessage}</p>}
        <button type="submit">Search flight</button>
      </form>
    </div>
  );
}

export default Home;