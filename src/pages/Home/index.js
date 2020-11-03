import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import getFlightInfoAndPassengerIndex from '../../lib/getFlightInfoAndPassengerIndex';
import Input from '../../components/Input';

import { HomeContainer } from './styles';

function Home({ flightNumber, setFlightNumber, lastName, setLastName, setPassengerIndex, setFlightInfo, history }) {
  const [ errorMessage, setErrorMessage ] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("aqui 1")

    if (flightNumber && lastName) {
      console.log("aqui 2")
      try {
        const { flightInfo, passengerIndex } = await getFlightInfoAndPassengerIndex(flightNumber, lastName);
    
        if (passengerIndex >= 0) {
          console.log(passengerIndex)
          setPassengerIndex(passengerIndex);
          setFlightInfo(flightInfo);
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
    <HomeContainer>
      <h1>Welcome to your web check-in</h1>
      <form onSubmit={handleFormSubmit}>
        <Input label="Flight Number" value={flightNumber} setInputValue={setFlightNumber}/>
        <Input label="Last Name" value={lastName} setInputValue={setLastName}/>
        {errorMessage && <p>{errorMessage}</p>}
        <Button variant="contained" color="primary" type="submit">Search flight</Button>
      </form>
    </HomeContainer>
  );
}

export default Home;