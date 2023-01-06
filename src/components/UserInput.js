// App.js passed down 'onAddUserInfo={addUserInfoHandler}' in props
import styled from "styled-components";
import React, {useState} from "react";
import Button from "./Button";
import Popup from "reactjs-popup";

const StyledInput = styled.div`
    background-color: #ffe;
    padding: 1rem;
    margin: 2rem auto;
    width: 50rem;
    max-width: 95%;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;

const StyledInputContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
    text-align: left;

    & label {
        font-weight: bold;
        margin-bottom: 0.5rem;
        display: block;
    }

    & input {
        font: inherit;
        padding: 0.5rem;
        border-radius: 6px;
        border: 1px solid #ccc;
        width: 20rem;
        max-width: 100%;
    }
`;

const UserInput = props => {
    // we have username input and age input
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [isUsernameValid, setIsUsernameValid] = useState(true);
    const [isAgeValid, setIsAgeValid] = useState(true);

    const usernameChangeHandler = event => {
        // if statement for length check
        if(event.target.value.trim().length > 0) {
            setIsUsernameValid(true);
        }
        setUsername(event.target.value);
    };
    const ageChangeHandler = event => {
        // if statement for length check and negativity check
        if(event.target.value.trim().length > 0) {
            if(Number(event.target.value) > 0) {
                setIsAgeValid(true);
            } else {
                setIsAgeValid(false);
            }
        }
        setAge(event.target.value);
    }

    const submitHandler = event => {
        event.preventDefault();
        if(username.trim().length === 0 || age.trim().length === 0) {
            console.log('fill all required fields');
            setIsUsernameValid(false);
            return;
        } else if(Number(age) < 0) {
            console.log('enter age >0');
            return;
        }
        const userInfo = {
            id: Math.random().toString(),
            username: username,
            age: age,
            isUsernameValid: isUsernameValid,
            isAgeValid: isAgeValid,
        }

        props.onAddUserInfo(userInfo);
        setUsername('');
        setAge('');
    }

    return (
        <StyledInput>
            <form onSubmit={submitHandler}>
                <StyledInputContainer>
                    <label>Username</label>
                    <input type="text" value={username} onChange={usernameChangeHandler}/>
                </StyledInputContainer>
                <StyledInputContainer>
                    <label>Age(Years)</label>
                    <input input="number" min="0" step="1" value={age} onChange={ageChangeHandler}/>
                </StyledInputContainer>
                <Button type="submit">Add User</Button>
            </form>
        </StyledInput>
    );
}

export default UserInput;