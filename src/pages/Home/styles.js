import styled from 'styled-components';

export const HomeContainer = styled.div`
  margin: 0 auto;
  max-width: 780px;
  min-height: 100vh;
  padding: 10vh 5vw;

  place-content: center;

  display: flex;
  flex-direction: column;

  background-color: #dfdfdf;

  form {
    div {
      & + div {
        margin-top: 4vh;
      }
    }

    p {
      font-size: 1rem;
      margin-top: 4vh;

      color: #ff6655;
    }

    button {
      margin-top: 4vh;
    }
  }
`;