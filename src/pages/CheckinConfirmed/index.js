import React from 'react'
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

import { CheckinContainer } from './styles';

export default function CheckinConfirmed() {
  return (
    <CheckinContainer>
      <h1>Your check-in is confirmed!</h1>
    
      <Link to="/" ><Button variant="contained" color="primary" type="button">Home</Button></Link>
    </CheckinContainer>
  )
}
