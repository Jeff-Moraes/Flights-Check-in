import React from 'react'

export default function ReviewInfo({ passengerInfos, history }) {
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

  const handleConfirmInfo = (e) => {
    e.preventDefault();

    history.push("/checkin-confirmed");
  }

  return (
    <div>
      <h1>Please review your information</h1>
      <div>
        {PassengerInfoTags}
      </div>
      <button type="button" onClick={handleConfirmInfo}>Continue</button>
    </div>
  )
}
