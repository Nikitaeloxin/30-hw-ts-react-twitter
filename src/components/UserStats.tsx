import React, {useContext} from 'react';
import Avatar from "./Avatar";
import {UserContext} from "../utils/userContext";


const UserStats = () => {
    return (
        <UserContext.Consumer>{({name, followers, following, increase, decrease}) => (
            <div className='user-stats'>
                <div>
                    <Avatar/>
                    {name}
                </div>
                <div className='stats'>
                    <div className='Followers' onClick={decrease} onContextMenu={increase}>{followers} followers</div>
                    <div className='Following' onClick={decrease} onContextMenu={increase}>{following} Following</div>
                </div>
            </div>
        )}
        </UserContext.Consumer>
    );
};

export default UserStats;