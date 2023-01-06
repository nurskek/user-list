import React, {useState} from "react";
import UserInput from './components/UserInput'
import UsersList from './components/UsersList'
import Popup from 'reactjs-popup';
import styled from "styled-components";

const StyledPopup = styled(Popup)`
    &-content {background-color: #fee;
    border: black 1px;
    padding: 1rem;
    margin: 2rem auto;
    width: 50rem;
    max-width: 95%;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);}
`;

const App = () => {
    const [usersList, setUsersList] = useState([]);
    const [usernameValid, setUsernameValid] = useState(false);
    
    const addUserInfoHandler = info => {
        setUsersList( prevInfo => {
            const UpdatedInfo = [...prevInfo];
            UpdatedInfo.unshift({id: info.id, username: info.username, age: info.age, isUsernameValid: info.isUsernameValid, isAgeValid: info.isAgeValid});
            return UpdatedInfo;
        })

        setUsernameValid(info.isUsernameValid);
        console.log(usersList);
        console.log(usernameValid);
    };
    let userContent = (
        <div></div>
    );

    if(usersList.length > 0) {
        userContent = (
            <UsersList items={usersList} />
        );
    }

    return (
        <div>
            <StyledPopup open={usernameValid}>
                <div>fill all required fields</div>
            </StyledPopup>
            <UserInput onAddUserInfo={addUserInfoHandler}/>
            {userContent}
            
            
            {/* <Popup>
                <div>enter age less than 0</div>
            </Popup> */}
        </div>
    );
}

export default App;