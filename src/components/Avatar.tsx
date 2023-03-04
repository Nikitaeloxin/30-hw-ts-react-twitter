import React, {useContext, useState} from 'react';
import {UserContext} from "../utils/userContext";

interface Props {

    size?: string
}

const Avatar = ({size}: Props) => {

    return (
        <UserContext.Consumer>{({avatar, name, updateAvatar, updateName}) => (
            <img
                onClick={updateAvatar}
                onContextMenu={updateName}
                className={`user-avatar ${size ?? ""}`}
                src={avatar} alt={name}/>
        )
        }
        </UserContext.Consumer>
    );
};

export default Avatar;