import React from 'react';


export default function StageUser(prop) {
  let user = prop.participants.filter(element => element.user);
  console.log(user);
  return(
  <div>
    <div className="volume-bar">
    </div>
    <img  src={user.avatar} className="user-avatar" alt="user avatar"></img>
  </div>
  )
}