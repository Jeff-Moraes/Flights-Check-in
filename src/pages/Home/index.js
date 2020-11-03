import React, { useState } from 'react';

import getPassengerIndex from '../../lib/getPassengerIndex';

import Input from '../../components/Input';

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
        <Input label="Flight Number" value={flightNumber} setInputValue={setFlightNumber}/>
        <Input label="Last Name" value={lastName} setInputValue={setLastName}/>
        {errorMessage && <p>{errorMessage}</p>}
        <button type="submit">Search flight</button>
      </form>
    </div>
  );
}

export default Home;