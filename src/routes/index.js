import React, { useState } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../pages/Home";
import PassengerInfo from "../pages/PassengerInfo";

const Routes = () => {
  const [ flightNumber, setFlightNumber ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ passengerIndex, setPassengerIndex ] = useState(null);

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
          />)}
      />
      <Route
        path="/passenger-info"
        exact
        render={(props) => {
          if (passengerIndex !== null) {
              return <PassengerInfo {...props} lastName={lastName} />;
            } else {
              return <Redirect to="/" />;
            }
          }
        }
      />
    </Switch>
  );
};

export default Routes;