import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

import sendPassengerInfo from '../../lib/sendPassengerInfo';

import { ReviewInfoContainer } from './styles';

export default function ReviewInfo({ passengerInfos, flightInfo, passengerIndex, resetInfos, history }) {
  const [ errorMessage, setErrorMessage ] = useState(null);

  const getInfoName = (info) => {
    return info[0].split("").map(char => char === char.toUpperCase() ? ` ${char}` : char).join("").toUpperCase();
  };

  const PassengerInfoTags = (
    <>
      {Object.entries(passengerInfos).map(info => (
        info[0] !== "acceptsT&C" && (
          <div key={info[0]}>
            <span>{getInfoName(info)}</span>
            <p>{info[1]}</p>
          </div>
        ))
      )}
    </>
  )

  const handleConfirmInfo = async (e) => {
    e.preventDefault();
    const { error } = await sendPassengerInfo(flightInfo, passengerInfos, passengerIndex);
    
    if(error) {
      setErrorMessage("Check-in could not be confirmed, please try again")
    } else {
      resetInfos();
      history.push("/checkin-confirmed");
    }
  }

  return (
    <ReviewInfoContainer>
      <h1>Please review your information</h1>
      <div className="passengerInfos">{PassengerInfoTags}</div>
      { errorMessage && (
        <>
          <p>{errorMessage}</p>
          <Link to="/" >Try again</Link>
        </>
      )}
      <Button variant="contained" color="primary" type="button" onClick={handleConfirmInfo}>Continue</Button>
    </ReviewInfoContainer>
  )
}
