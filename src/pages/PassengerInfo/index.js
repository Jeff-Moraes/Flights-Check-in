import React, { useState } from 'react';

import nationalities from '../../lib/nationalities';

function PassengerInfo({ lastName, setPassengerInfos }) {
  const [ firstName, setFirstName ] = useState("");
  const [ newLastName, setNewLastName ] = useState("");
  const [ nationality, setNationality ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ phoneNumber, setPhoneNumber ] = useState("");
  const [ passport, setPassport ] = useState("");
  const [ acceptsTandC, setAcceptsTandC ] = useState(false);

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const passengerInfo = {
      firstName,
      newLastName,
      nationality,
      email,
      phoneNumber,
      passport,
      acceptsTandC
    };

    console.log(passengerInfo)

    setPassengerInfos(passengerInfo)
  }

  return (
    <div>
      <h1>Welcome, {lastName}</h1>
      <form onSubmit={handleSubmitForm} >
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={newLastName}
          onChange={(event) => setNewLastName(event.target.value)}
        />
        <select value={nationality} onChange={(event) => setNationality(event.target.value)}>
          { nationalities.map(nationality => (
            <option key={nationality} value={nationality}>{nationality}</option>
          ))}
        </select>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="number"
          placeholder="Phone number"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
        <input
          type="text"
          placeholder="Passport #"
          value={passport}
          onChange={(event) => setPassport(event.target.value)}
        />
        <input
          id="tc"
          type="checkbox"
          value={acceptsTandC}
          onChange={(event) => setAcceptsTandC(event.target.checked)}
        />
        <label htmlFor="tc">Accepts T&C</label>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
}

export default PassengerInfo;