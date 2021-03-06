import React, { useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import nationalities from '../../lib/nationalities';
import Input from '../../components/Input';

import { PassengerInfoContainer } from './styles';

function PassengerInfo({ passengerLastName, setPassengerInfos, history }) {
  const [ passengerInfo, setPassengerInfo] = useState({
    lastName: passengerLastName,
    "acceptsT&C": false,
  });
  
  const handleInputChange = (event) => {    
    const { name, value, checked } = event.target;

    setPassengerInfo({
      ...passengerInfo,
      [name]: name === "acceptsT&C" ? checked : value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setPassengerInfos(passengerInfo)
    history.push("/review-info");
  }

  const ExtraPassengerInfo = (
    <>
      {["Austrian", "Belgian", "French"].includes(passengerInfo.nationality) &&
        <>
          <Input name="country" label="Country" value={passengerInfo.country} handleInput={handleInputChange}/>
          <Input name="city" label="City" value={passengerInfo.city} handleInput={handleInputChange}/>
        </>
      }
      {["Belgian", "Spanish"].includes(passengerInfo.nationality) &&
        <Input name="address" label="Address" value={passengerInfo.address} handleInput={handleInputChange}/>
      }
      {["Austrian", "Greek"].includes(passengerInfo.nationality) &&
        <Input name="passportExpiryDate" label="Passport expiry date" type="date" value={passengerInfo.passportExpiryDate} handleInput={handleInputChange}/>
      }
      {["Belgian", "French"].includes(passengerInfo.nationality) &&
        <Input
          name="birthDate"
          label="Birth date"
          type="date"
          value={passengerInfo.birthDate}
          handleInput={handleInputChange}
        />
      }
      {passengerInfo.nationality === "French" &&
        <Input name="birthPlace" label="Birth place" value={passengerInfo.birthPlace} handleInput={handleInputChange} />
      }
      {passengerInfo.nationality === "Greek" &&
        <>
          <Input name="passportDateOfIssue" label="Passport date of issue" type="date" value={passengerInfo.passportDateOfIssue} handleInput={handleInputChange}/>
          <Input name="passportCountryOfIssue" label="Passport country of issue" value={passengerInfo.passportCountryOfIssue} handleInput={handleInputChange}/>
          <Input name="passportCityOfIssue" label="Passport city of issue" value={passengerInfo.passportCityOfIssue} handleInput={handleInputChange}/>
        </>
      }
    </>
  )

  return (
    <PassengerInfoContainer>
      <h1>Welcome, {passengerLastName}</h1>
      <form onSubmit={handleSubmitForm} >
        <Input name="firstName" label="First Name" value={passengerInfo.firstName} handleInput={handleInputChange}/>
        <Input name="lastName" label="Last Name" value={passengerInfo.lastName} handleInput={handleInputChange}/>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-nationality-native-simple">Nationality</InputLabel>
          <Select
            native
            name="nationality"
            value={passengerInfo.nationality}
            onChange={(event) => handleInputChange(event)}
            label="Nationality"
            inputProps={{
              name: 'nationality',
              id: 'outlined-nationality-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            { nationalities.map(nationality => (
              <option key={nationality} value={nationality}>{nationality}</option>
            ))}
          </Select>
        </FormControl>
        <Input name="email" label="Email" type="email" value={passengerInfo.email} handleInput={handleInputChange}/>
        <Input name="phoneNumber" label="Phone number" value={passengerInfo.phoneNumber} handleInput={handleInputChange}/>
        <Input name="passport" label="Passport #" value={passengerInfo.passport} handleInput={handleInputChange}/>
        {ExtraPassengerInfo}
        <div className="checkboxContainer">
          <FormControlLabel
            control={
              <Checkbox
                name="acceptsT&C"
                checked={passengerInfo["acceptsT&C"]}
                onChange={(event) => handleInputChange(event)}
                color="primary"
              />
            }
            label="Accepts T&C"
          />
        </div>
        <Button variant="contained" color="primary" type="submit">Continue</Button>
      </form>
    </PassengerInfoContainer>
  );
}

export default PassengerInfo;