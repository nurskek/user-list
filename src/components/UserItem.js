import React from 'react';
import styled from 'styled-components';

const StyledLi = styled.li`
  margin: 1rem 0;
  background: #8b005d;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 5px;
  color: white;
  padding: 1rem 2rem;
  cursor: pointer;
`;
const UserItem = props => {
    return (
        <StyledLi>{props.children}</StyledLi>
    )
}

export default UserItem;