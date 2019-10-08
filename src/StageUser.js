import React from 'react';


export default function StageUser(props) {
  console.log(props);
  return(
  <div>
    <div className="volume-bar">
      VOLUME BAR
    </div>
    <img  src={props.user.avatar} className="user-avatar" alt="user avatar"></img>
  </div>
  )
}