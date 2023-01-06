import styled from "styled-components";
import UserItem from "./UserItem";

const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledContainer = styled.div`
  background-color: #ffe;
  padding: 1rem;
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;

const UsersList = (props) => {
  return (
    <StyledContainer>
      <StyledUl>
        {props.items.map((item) => (
          <UserItem key={item.id}>
            {item.username} ({item.age} years old)
          </UserItem>
        ))}
      </StyledUl>
    </StyledContainer>
  );
};

export default UsersList;
