import axios from "axios";

async function getPassengerIndex(flightNumber, passengerLastName) {
  const flightInfo = await axios.get(`http://localhost:3333/flights?number=${flightNumber}`);
  const passengerIndex = await flightInfo.data[0].passengers.findIndex(passenger => passenger.lastName === passengerLastName)

  return passengerIndex
}

export default getPassengerIndex;