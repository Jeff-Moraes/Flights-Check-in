import styled from 'styled-components';

export const ReviewInfoContainer = styled.div`
  margin: 0 auto;
  max-width: 780px;
  padding: 10vh 5vw;

  place-content: center;

  display: flex;
  flex-direction: column;

  background-color: lightblue;

  h1 {
    font-size: 2rem;
    text-align: center;
    color: #303EA0;
    margin-bottom: 5vh;
  }

  .passengerInfos {
    display: flex;
    flex-direction: column;

    div {
      border: 1px solid #303EA0;
      border-radius: 10px;
      position: relative;

      & + div {
        margin-top: 30px;
      }

      span {
        position: absolute;
        top: -10px;
        left: 5px;
        background-color: lightblue;
        padding: 3px;
        font-size: 0.75rem;
        color: #303EA0;
      }

      p {
        font-size: 1.25rem;
        padding: 3vh 1rem;
      }
    }
  }

  button {
    margin-top: 4vh;
  }
`;