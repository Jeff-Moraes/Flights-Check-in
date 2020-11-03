import axios from "axios";

async function getFlightInfoAndPassengerIndex(flightNumber, passengerLastName) {
  const flightInfo = await axios.get(`http://localhost:3333/flights?number=${flightNumber}`);
  const passengerIndex = await flightInfo.data[0].passengers.findIndex(passenger => passenger.lastName === passengerLastName)

  return { flightInfo: flightInfo.data[0], passengerIndex }
}

export default getFlightInfoAndPassengerIndex;