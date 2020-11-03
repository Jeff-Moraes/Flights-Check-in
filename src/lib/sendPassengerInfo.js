import axios from "axios";

async function sendPassengerInfo(flightInfo, passengerInfo, passengerIndex) {
  flightInfo.passengers[passengerIndex] = {...flightInfo.passengers[passengerIndex], ...passengerInfo, checkIn: true};

  try {
    await axios.put(`http://localhost:3333/flights/${flightInfo.id}`, flightInfo);
    return { confirmed: true }
  } catch (error) {
    return { error }
  }
}

export default sendPassengerInfo;