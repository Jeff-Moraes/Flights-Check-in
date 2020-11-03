import React, { useState } from 'react';

import nationalities from '../../lib/nationalities';

function PassengerInfo({ lastName, setPassengerInfos }) {
  const [ firstName, setFirstName ] = useState("");
  const [ nationality, setNationality ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ phoneNumber, setPhoneNumber ] = useState("");
  const [ passport, setPassport ] = useState("");
  const [ acceptsTandC, setAcceptsTandC ] = useState(false);

  return (
    <div>
      <h1>Welcome, {lastName}</h1>
      <form>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          defaultValue={lastName}
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
          onChange={(event) => setAcceptsTandC(event.target.value)}
        />
        <label htmlFor="tc">Accepts T&C</label>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
}

export default PassengerInfo;