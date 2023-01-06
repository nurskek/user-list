import React, {useState} from "react";
import UserInput from './components/UserInput'
import UsersList from './components/UsersList'


const App = () => {
    const [usersList, setUsersList] = useState([]);
    
    const addUserInfoHandler = info => {
        setUsersList( prevInfo => {
            const UpdatedInfo = [...prevInfo];
            UpdatedInfo.unshift({id: info.id, username: info.username, age: info.age});
            return UpdatedInfo;
        })
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
            <UserInput onAddUserInfo={addUserInfoHandler}/>
            {userContent}
        </div>
    );
}

export default App;