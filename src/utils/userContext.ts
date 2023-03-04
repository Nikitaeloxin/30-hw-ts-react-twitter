import React from "react";

export const UserContext = React.createContext({
    avatar:'https://www.gravatar.com/avatar/0?d=monsterid',
    name:'unknown',
    followers:100,
    following:1000,
    updateAvatar:()=>{},
    updateName:(e:any)=>{},
    increase:(e:any)=>{},
    decrease:(e:any)=>{}
     })
