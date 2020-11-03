import axios from "axios";

async function sendPassengerInfo(flightInfo, passengerInfo, passengerIndex) {
  flightInfo.passengers[passengerIndex] = passengerInfo;

  try {
    await axios.post(`http://localhost:3333/flights?number=${flightInfo.number}`, {flightInfo});
    return { confirmed: true }
  } catch (error) {
    return { error }
  }
}

export default sendPassengerInfo;