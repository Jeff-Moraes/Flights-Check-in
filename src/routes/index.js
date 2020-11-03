import React, { useState } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../pages/Home";
import PassengerInfo from "../pages/PassengerInfo";
import ReviewInfo from "../pages/ReviewInfo";
import CheckinConfirmed from "../pages/CheckinConfirmed";

const Routes = () => {
  const [ flightNumber, setFlightNumber ] = useState("");
  const [ flightInfo, setFlightInfo ] = useState(null);
  const [ lastName, setLastName ] = useState("");
  const [ passengerIndex, setPassengerIndex ] = useState(null);
  const [ passengerInfos, setPassengerInfos ] = useState(null);

  const resetInfos = () => {
    setFlightNumber("");
    setFlightInfo(null);
    setLastName("");
    setPassengerIndex(null);
    setPassengerInfos(null);
  }

  return (
    <Switch>
      <Route
        path="/"
        exact
        render={(props) => (
          <Home {...props}
            flightNumber={flightNumber}
            setFlightNumber={setFlightNumber}
            lastName={lastName}
            setLastName={setLastName}
            setPassengerIndex={setPassengerIndex}
            setFlightInfo={setFlightInfo}
          />)}
      />
      <Route
        path="/passenger-info"
        exact
        render={(props) => {
          if (passengerIndex !== null) {
              return <PassengerInfo {...props} passengerLastName={lastName} setPassengerInfos={setPassengerInfos} />;
            } else {
              return <Redirect to="/" />;
            }
          }
        }
      />
      <Route
        path="/review-info"
        exact
        render={(props) => {
          if (passengerInfos) {
              return <ReviewInfo {...props}
                passengerInfos={passengerInfos}
                flightInfo={flightInfo}
                passengerIndex={passengerIndex}
                resetInfos={resetInfos} />;
            } else {
              return <Redirect to="/" />;
            }
          }
        }
      />
      <Route
        path="/checkin-confirmed"
        exact
        render={(props) => <CheckinConfirmed {...props} />}
      />
    </Switch>
  );
};

export default Routes;