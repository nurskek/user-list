import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Button from "./Button";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const StyledCard = styled(Card)`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;

  & header {
    background: #4f005f;
    padding: 1rem;
  }
  & header h2 {
    margin: 0;
    color: white;
  }

  & div {
    padding: 1rem;
  }

  & footer {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
  }

  @media (min-width: 768px) {
    left: calc(50% - 20rem);
    width: 40rem;
  }
`;

const ErrorModal = (props) => {
  return (
    <div>
      <Backdrop onClick={props.onErrorShown}></Backdrop>
      <Card>
        <StyledCard>
          <header>
            <h2>{props.title}</h2>
          </header>
          <div>
            <p>{props.message}</p>
          </div>
          <footer>
            <Button onClick={props.onErrorShown}>Okay</Button>
          </footer>
        </StyledCard>
      </Card>
    </div>
  );
};

export default ErrorModal;
