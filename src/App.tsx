import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Body from "./components/Body";
import {UserContext} from "./utils/userContext";

function App() {
    const [name, setName] = useState('nickname');
    const [avatar, setAvatar] = useState('https://www.gravatar.com/avatar/0?d=monsterid')
    const [followers, setFollowers] = useState(10)
    const [following, setFollowing] = useState(1000)

    const updateAvatar = () => {
        const url = prompt("Enter url for new avatar");
        if (url) {
            setAvatar(url);
        }
    }
    const updateName = (e: Event) => {
        e.preventDefault();
        const inputData = prompt("Enter new name");
        if (inputData) {
            setName(inputData);
        }
    }
    const increase = (event: any) => {
        event.preventDefault();
        if (event.currentTarget.className == 'Followers') {
            setFollowers(followers + 1)
        } else {
            setFollowing(following + 1)
        }
    }

    const decrease = (event: any) => {
        event.preventDefault();
        if (followers >0 && event.currentTarget.className == 'Followers') {
            setFollowers(followers - 1)
        }
        if(following >0 && event.currentTarget.className == 'Following'){
            setFollowing(following - 1)
        }
    }
    return (
        <div className="app">
            <UserContext.Provider
                value={{avatar, name, followers, following, updateAvatar, updateName, increase, decrease}}>
                <Nav/>
                <Body/>
            </UserContext.Provider>
        </div>
    );
}

export default App;
