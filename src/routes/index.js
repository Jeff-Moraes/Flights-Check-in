import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";

const Routes = () => {
  const [ flightNumber, setFlightNumber ] = useState("");
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
            setPassengerIndex={setPassengerIndex}
          />)}
      />
    </Switch>
  );
};

export default Routes;