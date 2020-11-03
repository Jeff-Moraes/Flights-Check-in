import React, { useState } from 'react'
import { Link } from "react-router-dom";

import sendPassengerInfo from '../../lib/sendPassengerInfo';

export default function ReviewInfo({ passengerInfos, flightInfo, passengerIndex, resetInfos, history }) {
  const [ errorMessage, setErrorMessage ] = useState(null);

  const getInfoName = (info) => {
    return <p>{info[0].split("").map(char => char === char.toUpperCase() ? ` ${char}` : char).join("").toUpperCase()}</p>
  };

  const PassengerInfoTags = (
    <>
      {Object.entries(passengerInfos).map(info => (
        <div key={info[0]}>
          <span>{getInfoName(info)}</span>
          <p>{info[1]}</p>
        </div>
      ))}
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
    <div>
      <h1>Please review your information</h1>
      <div>{PassengerInfoTags}</div>
      { errorMessage && (
        <>
          <p>{errorMessage}</p>
          <Link to="/" >Try again</Link>
        </>
      )}
      <button type="button" onClick={handleConfirmInfo}>Continue</button>
    </div>
  )
}
