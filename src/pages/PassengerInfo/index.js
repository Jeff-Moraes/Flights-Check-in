import React, { useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

import nationalities from '../../lib/nationalities';

import Input from '../../components/Input';

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
        <Input label="First Name" value={firstName} setInputValue={setFirstName}/>
        <Input label="Last Name" value={newLastName} setInputValue={setNewLastName}/>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-nationality-native-simple">Nationality</InputLabel>
          <Select
            native
            value={nationality}
            onChange={(event) => setNationality(event.target.value)}
            label="Nationality"
            inputProps={{
              name: 'Nationality',
              id: 'outlined-nationality-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            { nationalities.map(nationality => (
              <option key={nationality} value={nationality}>{nationality}</option>
            ))}
          </Select>
        </FormControl>
        <Input label="Email" type="email" value={email} setInputValue={setEmail}/>
        <Input label="Phone number" value={phoneNumber} setInputValue={setPhoneNumber}/>
        <Input label="Passport #" value={passport} setInputValue={setPassport}/>
        <FormControlLabel
          control={
            <Checkbox
              checked={acceptsTandC}
              onChange={(event) => setAcceptsTandC(event.target.checked)}
              name="acceptsTandC"
              color="primary"
            />
          }
          label="Accepts T&C"
        />
        <button type="submit">Continue</button>
      </form>
    </div>
  );
}

export default PassengerInfo;