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
  const [ country, setCountry ] = useState("");
  const [ city, setCity ] = useState("");
  const [ address, setAddress ] = useState("");
  const [ passportExpiryDate, setPassportExpiryDate ] = useState("");
  const [ birthDate, setBirthDate ] = useState("");
  const [ birthPlace, setBirthPlace ] = useState("");
  const [ passportDateOfIssue, setPassportDateOfIssue ] = useState("");
  const [ passportCountryOfIssue, setPassportCountryOfIssue ] = useState("");
  const [ passportCityOfIssue, setPassportCityOfIssue ] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const passengerInfo = {
      firstName,
      newLastName,
      nationality,
      email,
      phoneNumber,
      passport,
      acceptsTandC,

      country,
      city,
      address,
      passportExpiryDate,
      birthDate,
      birthPlace,
      passportDateOfIssue,
      passportCountryOfIssue,
      passportCityOfIssue
    };

    console.log(passengerInfo)

    setPassengerInfos(passengerInfo)
  }

  const ExtraPassengerInfo = (
    <>
      {["Austrian", "Belgian", "French", "Greek"].includes(nationality) &&
        <>
          <Input label="Country" value={country} setInputValue={setCountry}/>
          <Input label="City" value={city} setInputValue={setCity}/>
        </>
      }
      {["Belgian", "Spanish"].includes(nationality) &&
        <Input label="Address" value={address} setInputValue={setAddress}/>
      }
      {["Austrian", "Greek"].includes(nationality) &&
        <Input label="Passport expiry date" value={passportExpiryDate} setInputValue={setPassportExpiryDate}/>
      }
      {["Belgian", "French"].includes(nationality) &&
        <Input label="Birth date" type="date" value={birthDate} setInputValue={setBirthDate}/>
      }
      {nationality === "French" &&
        <Input label="Birth place" value={birthPlace} setInputValue={setBirthPlace}/>
      }
      {nationality === "Greek" &&
        <>
          <Input label="Passport date of issue" type="date" value={passportDateOfIssue} setInputValue={setPassportDateOfIssue}/>
          <Input label="Passport country of issue" value={passportCountryOfIssue} setInputValue={setPassportCountryOfIssue}/>
          <Input label="Passport city of issue" value={passportCityOfIssue} setInputValue={setPassportCityOfIssue}/>
        </>
      }
    </>
  )

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
        {ExtraPassengerInfo}
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